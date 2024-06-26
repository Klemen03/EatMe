import React from 'react';
import Logo from './Logo';
import Link from 'next/link';
import { Search, ShoppingBasket } from 'lucide-react';
import DarkModeBtn from './DarkModeBtn';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const navbarItems = [
    { label: 'Home' },
    { label: 'Menu' },
    { label: 'Mobile App' },
    { label: 'Contact Us' },
  ];

  return (
    <nav className="flex flex-row items-center justify-between py-4 border-b-2 tracking-wider">
      <Logo />
      <div className="flex flex-row gap-1 items-center">
        {navbarItems.map((item) => (
          <Link href={'/'} key={item.label}>
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
        <p>SIGN IN</p>
        <DarkModeBtn />
      </div>
    </nav>
  );
};

export default Navbar;
