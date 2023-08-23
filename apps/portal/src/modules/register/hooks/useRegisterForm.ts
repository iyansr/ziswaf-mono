import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from 'ui/src/components/use-toast';

import { useRouter } from 'next/navigation';

import useMutateRegister from '@/modules/register/hooks/useMutateRegister';
import { RegisterSchema, registerSchema } from '@/modules/register/schema';

const useRegisterForm = () => {
  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });
  const { mutateAsync, isLoading } = useMutateRegister();
  const router = useRouter();
  const { toast } = useToast();

  const onSubmit = async (data: RegisterSchema) => {
    try {
      await mutateAsync(data);
      toast({
        title: 'Pendaftaran berhasil',
        description: 'Silahkan masuk untuk melanjutkan',
        variant: 'default',
        duration: 2000,
      });

      router.push('/login');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast({
        title: 'Galal mendaftar',
        description: error?.response?.data?.error ?? 'Terjadi kesalahan',
        variant: 'destructive',
        duration: 2000,
      });
    }
  };
  return { form, onSubmit, isLoading };
};

export default useRegisterForm;
