import React from 'react';

import Link from 'next/link';

import DonationItemCard from '@/modules/shared/components/DonationItemCard';

type Props = {
  title: string;
};

const DonationSection = ({ title }: Props) => {
  return (
    <div className="mt-6">
      <div className="flex items-center justify-between px-4">
        <h3 className="font-semibold">{title}</h3>
        <Link href="#" className="text-sm font-medium text-orange-500">
          Lihat Semua
        </Link>
      </div>

      <div className="flex space-x-4 px-4 overflow-auto py-2 scroll-smooth">
        <DonationItemCard />
        <DonationItemCard />
        <DonationItemCard />
        <DonationItemCard />
      </div>
    </div>
  );
};

export default DonationSection;
