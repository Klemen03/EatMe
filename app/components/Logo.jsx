import React from 'react';
import { CookingPot } from 'lucide-react';

const Logo = () => {
  return (
    <div className="text-green-800 flex text-4xl font-semibold pt-2 pl-2">
      <span className="flex flex-row bg-yellow-400 p-2 px-3 rounded-2xl">
        <span>Eat</span>
        <CookingPot size={35} strokeWidth={3} className="mx-0.5" />
        <span>Me.</span>
      </span>
    </div>
  );
};

export default Logo;
