"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { use } from 'react';

const NavLink = ({ href, children }) => {

  const pathname = usePathname();
  if (pathname === href) {
    return (
      <Link href={href} className="text-purple-500 font-semibold">
        {children}
      </Link>
    );
  } 

  return (
      <Link href={href}>{children}</Link>
  );
};

export default NavLink;