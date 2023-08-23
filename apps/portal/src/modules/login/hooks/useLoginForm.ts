import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from 'ui/src/components/use-toast';

import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

import { LoginSchema, loginSchema } from '@/modules/login/schema';
import { K_BASE_URL } from '@/modules/shared/constants';

const useLoginForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });
  const { toast } = useToast();
  const router = useRouter();

  const onSubmit = async (data: LoginSchema) => {
    if (!submitting) {
      setSubmitting(true);
    }
    const result = await signIn('credentials', {
      ...data,
      callbackUrl: K_BASE_URL,
      redirect: false,
    });
    if (result?.error) {
      toast({
        title: 'Login Gagal',
        description: result.error,
        variant: 'destructive',
        duration: 2000,
      });
      return;
    }
    if (result?.ok) {
      toast({
        title: 'Login Berhasil',
        variant: 'default',
        duration: 2000,
      });
      router.push('/');
      return;
    }
    setSubmitting(false);
  };

  return { form, onSubmit, submitting };
};

export default useLoginForm;
