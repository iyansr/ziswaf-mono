import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

const DonationItemCard = () => {
  return (
    <Link href="#">
      <div className="flex-shrink-0 w-56 border shadow-md rounded-md overflow-hidden hover:shadow-none transition duration-300">
        <div className="aspect-video relative">
          <Image
            src="https://ik.imagekit.io/iyansr/zis-item1_4fp6LWH7n.jpg?updatedAt=1692376347958"
            fill
            alt="Item Image"
          />
        </div>

        <div className="p-3">
          <p className="text-[10px] text-slate-500">Yayasan Zakat</p>
          <p className="text-xs font-semibold mt-2">Urgent Masjid Satu-satunya Rawan Roboh</p>

          <p className="text-[10px] mt-2">
            Terkumpul{' '}
            <span className="text-sm font-semibold text-orange-400 ml-2">Rp20.000.000</span>
          </p>

          <div className="w-full h-1 rounded-full bg-slate-300 mt-1">
            <div className="w-[65%] h-1 rounded-full bg-orange-500" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DonationItemCard;
