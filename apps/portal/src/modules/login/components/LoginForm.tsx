'use client';

import React from 'react';
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

import Link from 'next/link';

import useLoginForm from '@/modules/login/hooks/useLoginForm';

const LoginForm = () => {
  const { form, onSubmit } = useLoginForm();
  return (
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
  );
};

export default LoginForm;
