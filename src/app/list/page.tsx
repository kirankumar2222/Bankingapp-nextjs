import Filter from "@/components/Filter";
import Image from "next/image";
import React from "react";

const ListPage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* CAMPAIGN */}
      <div className="hidden bg-pink-50 px-4 sm:flex justify-between h-64 rounded-md">
        {/* TEXT CONTAINER */}
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
            Grab up to 50% off on <br /> Selected Products
          </h1>
          <button className="rounded-3xl bg-cart text-white w-max px-5 py-3 text-sm">
            Buy Now
          </button>
        </div>
        {/* IMAGE CONTAINER */}
        <div className="relative w-1/3 ">
          <Image src={"/woman.png"} alt="" fill className="object-contain" />
        </div>
      </div>
      {/* filter */}
      <Filter />
      {/* Product list */}
      <h1 className="mt-12 text-xl font-semibold">Shoes For You!</h1>
    </div>
  );
};

export default ListPage;
