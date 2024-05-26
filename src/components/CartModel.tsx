"use client";
import Image from "next/image";
import React from "react";

const CartModel = () => {
  const cartItems = true;
  return (
    <div className="w-max absolute p-4 rounded-md shadow-xl bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div className="">Cart is Empty</div>
      ) : (
        <>
          <h2 className="text-xl">Shopping Cart</h2>
          <div className="flex flex-col gap-8">
            <div className="flex gap-4">
              <Image
                src={
                  "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div className="">
                  {/* title */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">$34</div>
                  </div>
                  {/* DESC */}
                  <div className="text-sm text-gray-500">Available</div>
                </div>
                {/* BOTTOM */}
                <div className="mt-3 flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="underline text-blue-500 cursor-pointer">
                    remove
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom */}
          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span className="">Subtotal</span>
              <span className="">$49</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Shipping and Taxes calculated at checkout
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                View Chart
              </button>
              <button className="rounded-md py-3 px-4 bg-black text-white">
                CheckOut
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModel;
