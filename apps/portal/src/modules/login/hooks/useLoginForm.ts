import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  email: z.string({ required_error: 'Email harus diisi' }).email({ message: 'Email tidak valid' }),
  password: z.string({ required_error: 'Password harus diisi' }).min(8),
});

type LoginSchema = z.infer<typeof schema>;

const useLoginForm = () => {
  const form = useForm<LoginSchema>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: LoginSchema) => {
    console.log(data);
  };

  return { form, onSubmit };
};

export default useLoginForm;
