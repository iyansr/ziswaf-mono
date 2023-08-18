import React from 'react';

import Image from 'next/image';

import SearchBar from '@/modules/home/components/SearchBar';

const HomePage = () => {
  return (
    <main className="relative">
      <div className="p-4 -mt-4 bg-yellow-400 sticky top-0 z-10">
        <SearchBar />
      </div>
      <div className="relative aspect-video rounded-md overflow-hidden mt-6 mx-4">
        <Image
          src="https://ik.imagekit.io/iyansr/zis-carousel1_51xPIr38Y.jpeg?updatedAt=1692372579001"
          alt="Carousel1"
          fill
          className="object-cover"
        />
      </div>

      <div className="bg-slate-100 mt-6 p-4">
        <h2 className="font-semibold text-center">Mau berbuat kebaikan apa hari ini?</h2>

        <div className="flex items-center space-x-6 mt-4">
          <div className="aspect-square bg-yellow-300 flex-1 rounded-lg flex items-center justify-center font-semibold">
            zakat
          </div>
          <div className="aspect-square bg-yellow-300 flex-1 rounded-lg flex items-center justify-center font-semibold">
            infak
          </div>
          <div className="aspect-square bg-yellow-300 flex-1 rounded-lg flex items-center justify-center font-semibold">
            sedekah
          </div>
          <div className="aspect-square bg-yellow-300 flex-1 rounded-lg flex items-center justify-center font-semibold">
            wakaf
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
