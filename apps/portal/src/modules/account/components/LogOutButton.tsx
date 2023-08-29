'use client';

import React from 'react';
import { Button } from 'ui/src/components/button';

import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';

const LogOutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({ redirect: false, callbackUrl: '/' });

    router.push('/');
  };

  return (
    <Button
      variant="outline"
      className="w-full mt-5 border-red-600 text-red-500"
      onClick={handleLogout}
    >
      Keluar
    </Button>
  );
};

export default LogOutButton;
