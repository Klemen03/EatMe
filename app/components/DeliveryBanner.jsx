import React from 'react';
import { MdDeliveryDining } from 'react-icons/md';
import { FaDoorOpen } from 'react-icons/fa6';
import { TbPigMoney } from 'react-icons/tb';
import Image from 'next/image';

const DeliveryBanner = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center mx-auto justify-center max-w-7xl gap-10 mt-40 pb-80">
      <div className="mx-2">
        <Image
          src="/deliverybanner.png"
          alt="delivery"
          width={2500}
          height={1}
        />
      </div>
      <div className="flex flex-col max-w-7xl gap-6 mx-2">
        <h1 className="font-semibold uppercase text-2xl text-yellow-300 tracking-wider">
          Your favourite meal on the way!
        </h1>
        <p className="text-lg tracking-wide">
          Get ready to savor your favorite meal, delivered hot and fresh to your
          doorstep! Whether you are craving a classic noodles or something more
          adventurous, our speedy delivery service ensures you will not have to
          wait long. Enjoy free shipping on orders over $50 and track your order
          in real-time. Your delicious meal is just a few taps away!
        </p>

        <div className="text-3xl flex flex-row items-center gap-2 tracking-wide">
          <MdDeliveryDining size={50} />
          <p>
            Delivery in <span className="text-green-600">30 minutes</span>
          </p>
        </div>
        <div className="text-3xl flex flex-row items-center gap-2 tracking-wide">
          <TbPigMoney size={50} />
          <p>
            <span className="text-green-600">Free shipping</span> from 50$
          </p>
        </div>
        <div className="text-3xl flex flex-row items-center gap-2 tracking-wide">
          <FaDoorOpen size={50} />
          <p>
            Delivery on your <span className="text-green-600">doorstep</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryBanner;
