"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const links = [
    {
      title: "HomePage",
      url: "/",
    },
    {
      title: "Shop",
      url: "/shop",
    },
    {
      title: "Deals",
      url: "/deals",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Contact",
      url: "/contact",
    },
    {
      title: "Logout",
      url: "/logout",
    },
    {
      title: "cart(1)",
      url: "/",
    },
  ];
  return (
    <div>
      <Image
        src={"/menu.png"}
        alt=""
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="flex flex-col">
          {links.map((link) => (
            <Link href={link.url} key={link.title}>
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
