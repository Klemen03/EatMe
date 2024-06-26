import React from 'react';
import Logo from './Logo';
import Link from 'next/link';
import { Search, ShoppingBasket } from 'lucide-react';
import DarkModeBtn from './DarkModeBtn';

const Navbar = () => {
  const navbarItems = [
    { label: 'Home' },
    { label: 'Menu' },
    { label: 'Mobile App' },
    { label: 'Contact Us' },
  ];

  return (
    <nav className="flex flex-row items-center justify-between">
      <Logo />
      <div className="flex flex-row gap-3 items-center">
        {navbarItems.map((item) => (
          <Link href={'/'} key={item.label}>
            {item.label}
          </Link>
        ))}
      </div>
      <div className="flex flex-row items-center gap-3 pr-2">
        <Search />
        <ShoppingBasket />
        <p>SIGN IN</p>
        <DarkModeBtn />
      </div>
    </nav>
  );
};

export default Navbar;
