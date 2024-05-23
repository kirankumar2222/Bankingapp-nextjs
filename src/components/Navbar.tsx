import Link from "next/link";
import React from "react";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl-32">
      {/* Mobile */}
      <div className="h-full flex items-center justify-between">
        <Link href={"/"}>
          <div className="text-lg font-bold uppercase tracking-wide">
            Shop.com
          </div>
        </Link>
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
