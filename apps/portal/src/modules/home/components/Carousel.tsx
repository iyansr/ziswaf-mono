import Image from 'next/image';
import React from 'react';

const Carousel = () => {
  return (
    <div className="relative aspect-video rounded-md overflow-hidden mt-6 mx-4">
      <Image
        src="https://ik.imagekit.io/iyansr/zis-carousel1_51xPIr38Y.jpeg?updatedAt=1692372579001"
        alt="Carousel1"
        fill
        className="object-cover"
      />
    </div>
  );
};

export default Carousel;
