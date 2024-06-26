import React from 'react';
import { CookingPot } from 'lucide-react';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <div className="text-green-800 flex text-4xl font-semibold pl-2">
        <div className="flex flex-row bg-yellow-400 p-2 px-3 rounded-2xl">
          <p>Eat</p>
          <CookingPot size={35} strokeWidth={3} className="mx-0.5" />
          <p>Me.</p>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
