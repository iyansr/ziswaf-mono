import React from 'react';

import Image from 'next/image';

const UserDonationItem = () => {
  return (
    <div className="border border-slate-100 shadow-sm rounded-md px-4 py-2 mt-4 flex space-x-4">
      <div>
        <Image
          src="https://ik.imagekit.io/iyansr/default-user_8AOYFh7jT.png?updatedAt=1692379153646"
          width={46}
          height={56}
          alt="Item Image"
        />
      </div>

      <div>
        <p className="font-semibold text-orange-500">Hamba Allah</p>
        <p className="text-xs my-2">3 hari yang lalu</p>
        <p className="font-semibold">Rp 100.000</p>
      </div>
    </div>
  );
};

export default UserDonationItem;
