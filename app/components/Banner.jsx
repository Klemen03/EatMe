import { Button } from '@/components/ui/button';
import React from 'react';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className="flex flex-col mx-auto mt-20">
      <div className="flex flex-col h-[55vh] bg-banner-image bg-center items-center 2xl:bg-contain bg-cover bg-no-repeat justify-evenly">
        <h1 className="text-7xl font-semibold tracking-wider text-center text-white">
          Order your favourite<br></br>food here
        </h1>
        <p className="text-2xl font-medium  text-white tracking-wide max-w-3xl text-center">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <div>
          <Link href="/menu">
            <Button className="text-xl font-medium text-yellow-600">
              View Menu
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
