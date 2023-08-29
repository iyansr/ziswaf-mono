import React from 'react';

import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

import LogOutButton from '@/modules/account/components/LogOutButton';

const AccountPage = async () => {
  const session = await getServerSession();

  if (!session) {
    redirect('/login');
  }

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold">Hello {session?.user?.name}</h2>

      <LogOutButton />
    </div>
  );
};

export default AccountPage;
