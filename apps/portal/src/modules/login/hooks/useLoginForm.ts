import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from 'ui/src/components/use-toast';

import { signIn } from 'next-auth/react';

import { LoginSchema, loginSchema } from '@/modules/login/schema';

const useLoginForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });
  const { toast } = useToast();

  const onSubmit = async (data: LoginSchema) => {
    if (!submitting) {
      setSubmitting(true);
    }
    const result = await signIn('credentials', {
      ...data,
      callbackUrl: `${process.env.NEXT_PUBLIC_URL}`,
      redirect: false,
    });
    if (result?.error) {
      toast({
        title: 'Login Gagal',
        description: result.error,
        variant: 'destructive',
        duration: 2000,
      });
    }
    setSubmitting(false);
  };

  return { form, onSubmit, submitting };
};

export default useLoginForm;
