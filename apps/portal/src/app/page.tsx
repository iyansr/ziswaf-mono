import React from 'react';
import { Button } from 'ui/src/components/button';

import Carousel from '@/modules/home/components/Carousel';
import DonationSection from '@/modules/home/components/DonationSection';
import Menu from '@/modules/home/components/Menu';
import SearchBar from '@/modules/home/components/SearchBar';
import UserDonationItem from '@/modules/home/components/UserDonationItem';
import DonationItemCardVertical from '@/modules/shared/components/DonationItemCardVertical';

const HomePage = () => {
  return (
    <main className="relative">
      <div className="p-4 -mt-4 bg-amber-300 sticky top-0 z-10">
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
          <Button className="text-slate-50" size="sm" variant="destructive">
            Lihat Semua Program
          </Button>
        </div>
      </div>

      <div className="mt-10 px-4">
        <h3 className="font-semibold ">#OrangBaik</h3>

        <UserDonationItem />
        <UserDonationItem />
        <UserDonationItem />
        <UserDonationItem />

        <div className="flex justify-center mt-4">
          <Button className="text-slate-50" size="sm" variant="destructive">
            Lihat Semua
          </Button>
        </div>
      </div>

      <div className="h-60"></div>
    </main>
  );
};

export default HomePage;
