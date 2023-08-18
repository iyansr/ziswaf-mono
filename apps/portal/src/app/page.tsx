import React from 'react';

import SearchBar from '@/modules/home/components/SearchBar';
import Menu from '@/modules/home/components/Menu';
import Carousel from '@/modules/home/components/Carousel';
import Image from 'next/image';
import Link from 'next/link';
import DonationItemCard from '@/modules/shared/components/DonationItemCard';
import DonationSection from '@/modules/home/components/DonationSection';
import DonationItemCardVertical from '@/modules/shared/components/DonationItemCardVertical';
import { Button } from 'ui/components/ui/button';

const HomePage = () => {
  return (
    <main className="relative">
      <div className="p-4 -mt-4 bg-yellow-400 sticky top-0 z-10">
        <SearchBar />
      </div>
      <Carousel />
      <DonationSection title="Program Pilihan" />
      <Menu />

      <div className="mt-5 px-4">
        <h3 className="font-semibold ">Program</h3>

        <DonationItemCardVertical />
        <DonationItemCardVertical />
        <DonationItemCardVertical />
        <DonationItemCardVertical />

        <div className="flex justify-center mt-4">
          <Button className="text-slate-50" variant="destructive">
            Lihat Semua Program
          </Button>
        </div>
      </div>

      <div className="h-60"></div>
    </main>
  );
};

export default HomePage;
