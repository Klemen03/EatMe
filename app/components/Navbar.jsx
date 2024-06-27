'use client';

import React, { useState } from 'react';
import Logo from './Logo';
import Link from 'next/link';
import { Search, ShoppingBasket } from 'lucide-react';
import DarkModeBtn from './DarkModeBtn';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isActive, setIsActive] = useState('/');

  const navbarItems = [
    { label: 'Home', path: '/' },
    { label: 'Menu', path: '/menu' },
    { label: 'Mobile App', path: '/mobileapp' },
    { label: 'Contact Us', path: 'contact' },
  ];

  return (
    <nav className="flex flex-row items-center justify-between py-4 border-b-2 tracking-wider">
      <Logo />
      <div className="flex flex-row gap-1 items-center">
        {navbarItems.map((item) => (
          <Link
            className={
              isActive === item.path ? 'border-b-2 border-yellow-500' : ''
            }
            onClick={() => setIsActive(item.path)}
            href={item.path}
            key={item.label}
          >
            <Button className="text-xl" variant="ghost">
              {item.label}
            </Button>
          </Link>
        ))}
      </div>
      <div className="flex flex-row items-center gap-3 pr-2 text-xl">
        <Button variant="ghost">
          <Search />
        </Button>
        <Button variant="ghost">
          <ShoppingBasket />
        </Button>
        <Button>Sign In</Button>
        <DarkModeBtn />
      </div>
    </nav>
  );
};

export default Navbar;
