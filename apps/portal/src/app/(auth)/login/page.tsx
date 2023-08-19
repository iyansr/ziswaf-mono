'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from 'ui/src/components/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from 'ui/src/components/form';
import { Input } from 'ui/src/components/input';
import { z } from 'zod';

import Link from 'next/link';

const schema = z.object({
  email: z.string({ required_error: 'Email harus diisi' }).email({ message: 'Email tidak valid' }),
  password: z.string({ required_error: 'Password harus diisi' }).min(8),
});

type LoginSchema = z.infer<typeof schema>;

const LoginPage = () => {
  const form = useForm<LoginSchema>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: LoginSchema) => {
    console.log(data);
  };

  return (
    <div className="px-4 py-6">
      <h2 className="font-semibold text-center">
        Yuk Masuk untuk nikmati kemudahan berdonasi dan akses fitur lainnya
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Password" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <p className="text-red-500 underline font-medium text-right text-sm mt-3">
            <Link href="#">Lupa Password?</Link>
          </p>

          <Button type="submit" className="w-full" variant="destructive">
            Login
          </Button>

          <p className="text-sm text-slate-600 text-center">
            Belum punya akun?{' '}
            <Link href="/register" className="text-red-500 underline font-semibold">
              Yuk Daftar!
            </Link>
          </p>
        </form>
      </Form>
    </div>
  );
};

export default LoginPage;
