import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 bg-gray-200">
      <div className="flex w-full py-10 pt-20 gap-5 justify-evenly">
        <div className="flex flex-col gap-8 w-full lg:w-1/5">
          <h1 className="text-2xl font-medium">SHOP.COM</h1>
          <p>3252 winding way, toll plaza Chennai-83834</p>
          <h3 className="font-semibold">shopcom@gamil.com</h3>
          <h3 className="font-semibold">+123456789</h3>
          {/* icons */}
          <div className="flex gap-10">
            <Image src={"/facebook.png"} alt="" width={16} height={16} />
            <Image src={"/instagram.png"} alt="" width={16} height={16} />
            <Image src={"/youtube.png"} alt="" width={16} height={16} />
            <Image src={"/pinterest.png"} alt="" width={16} height={16} />
            <Image src={"/x.png"} alt="" width={16} height={16} />
          </div>
        </div>
        <div className="hidden lg:flex flex-col gap-14">
          <h1 className="text-2xl font-medium">COMPANY</h1>
          <div className="flex flex-col gap-6">
            <h2>About Us</h2>
            <h2>Careers</h2>
            <h2>Affiliates</h2>
            <h2>Blog</h2>
            <h2>Contact Us</h2>
          </div>
        </div>
        <div className="hidden lg:flex flex-col gap-14">
          <h1 className="text-2xl font-medium">COMPANY</h1>
          <div className="flex flex-col gap-6">
            <h2>About Us</h2>
            <h2>Careers</h2>
            <h2>Affiliates</h2>
            <h2>Blog</h2>
            <h2>Contact Us</h2>
          </div>
        </div>
        <div className="hidden lg:flex flex-col gap-14">
          <h1 className="text-2xl font-medium">COMPANY</h1>
          <div className="flex flex-col gap-6">
            <h2>About Us</h2>
            <h2>Careers</h2>
            <h2>Affiliates</h2>
            <h2>Blog</h2>
            <h2>Contact Us</h2>
          </div>
        </div>
        <div className="flex flex-col gap-8 lg:w-1/5 relative">
          <h2 className="text-2xl font-medium">SUBSCRIBE</h2>

          <p>
            Be the first to get the latest news about trends, promotions, and
            much more!
          </p>
          <div className="flex bg-white w-max">
            <input type="text" placeholder="Email Address" className="px-2" />
            <button className="p-3 bg-cart text-white">JOIN</button>
          </div>
          <h3 className="font-bold">Secure Payments</h3>
          {/* payment icons */}
          <div className="flex justify-between">
            <Image src={"/discover.png"} alt="" width={40} height={20} />
            <Image src={"/skrill.png"} alt="" width={40} height={20} />
            <Image src={"/paypal.png"} alt="" width={40} height={20} />
            <Image src={"/visa.png"} alt="" width={40} height={20} />
            <Image src={"/mastercard.png"} alt="" width={40} height={20} />
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="py-10 pb-20 flex items-center justify-between">
        <span className="font-semibold lg:pl-12">&copy; 2024 Shop.com</span>
        <div className="flex items-center gap-4">
          <div className="flex gap-3">
            <h3 className="text-gray-500">Language</h3>
            <h3 className="font-medium">United States | English</h3>
          </div>
          <div className="flex gap-3">
            <h3 className="text-gray-500">Currency</h3>
            <h3 className="font-medium">$ USD</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
