import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link
        href={"/test"}
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src={
              "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
            }
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition easy duration-100"
          />
          <Image
            src={
              "https://images.pexels.com/photos/20564358/pexels-photo-20564358/free-photo-of-a-woman-standing-by-a-lake-with-a-cell-phone.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            }
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">Our Price</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl ring-1 w-max ring-cart text-cart hover:bg-cart hover:text-white py-2 px-4">
          Add to Cart
        </button>
      </Link>
      <Link
        href={"/test"}
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src={
              "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
            }
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition easy duration-100"
          />
          <Image
            src={
              "https://images.pexels.com/photos/20564358/pexels-photo-20564358/free-photo-of-a-woman-standing-by-a-lake-with-a-cell-phone.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            }
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">Our Price</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl ring-1 w-max ring-cart text-cart hover:bg-cart hover:text-white py-2 px-4">
          Add to Cart
        </button>
      </Link>
      <Link
        href={"/test"}
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src={
              "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
            }
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition easy duration-100"
          />
          <Image
            src={
              "https://images.pexels.com/photos/20564358/pexels-photo-20564358/free-photo-of-a-woman-standing-by-a-lake-with-a-cell-phone.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            }
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">Our Price</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl ring-1 w-max ring-cart text-cart hover:bg-cart hover:text-white py-2 px-4">
          Add to Cart
        </button>
      </Link>
      <Link
        href={"/test"}
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src={
              "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
            }
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition easy duration-100"
          />
          <Image
            src={
              "https://images.pexels.com/photos/20564358/pexels-photo-20564358/free-photo-of-a-woman-standing-by-a-lake-with-a-cell-phone.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            }
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">Our Price</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-2xl ring-1 w-max ring-cart text-cart hover:bg-cart hover:text-white py-2 px-4">
          Add to Cart
        </button>
      </Link>
    </div>
  );
};

export default ProductList;
