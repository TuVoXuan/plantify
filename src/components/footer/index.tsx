import Image from "next/image";
import React from "react";
import LightLogo from "../../assets/images/LightLogo.png";
import Link from "next/link";
import Icons from "../icons";
import { Input } from "../ui/input";

const quickLinks = [
  { label: "About Us", link: "/about-us" },
  { label: "Shop", link: "/shop" },
  { label: "My Cart", link: "/my-cart" },
  { label: "Blog", link: "/blog" },
];

const support = [
  { label: "Track your Order", link: "/my-orders" },
  { label: "Help & FAQ", link: "/faq" },
  { label: "Privacy Policy", link: "/policy" },
  { label: "Return & Refund", link: "/return-refund" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-700">
      <div className="pt-8 pb-4 px-4 md:px-0 lg:pt-12 container-cs">
        <div className="md:flex md:gap-x-[40.4px] lg:gap-x-[110px]">
          <div className="flex flex-col items-center gap-y-2 md:items-start md:w-[204px] lg:gap-y-5 lg:w-[400px]">
            <Image
              src={LightLogo}
              height={48}
              width={191}
              alt="plantify logo"
              className="w-[113px] h-[32px] xl:w-[191px] xl:h-[48px]"
            />

            <p className="text-body-md text-white text-center md:text-left md:text-body-sm md:font-medium lg:text-body-lg">
              Gorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet adipiscing elit dolor sit amet.
              Gorem ipsum dolor sit amet, consectetur
            </p>
          </div>
          <div className="flex flex-col items-center mt-8 gap-y-8 md:flex-row md:mt-0 md:gap-x-[40.4px] md:shrink-0 md:items-start lg:gap-x-[110px]">
            <div className="flex flex-col text-white-cs">
              <h5 className="text-desktop-h5 mb-3 text-center md:text-desktop-h6 lg:text-desktop-h5 lg:mb-4">
                Quick Links
              </h5>
              <ul className="space-y-2 flex flex-col items-center">
                {quickLinks.map((item) => (
                  <li key={item.label}>
                    <Link href={item.link} className="text-body-md md:text-body-sm md:font-medium lg:text-body-lg">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col text-white-cs">
              <h5 className="text-desktop-h5 mb-3 text-center md:text-desktop-h6 lg:text-desktop-h5 lg:mb-4">
                Support
              </h5>
              <ul className="space-y-2 flex flex-col items-center">
                {support.map((item) => (
                  <li key={item.label}>
                    <Link href={item.link} className="text-body-md md:text-body-sm md:font-medium lg:text-body-lg">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-y-8 md:flex-1 md:mt-0 lg:gap-y-6">
            <div className="flex flex-col items-center text-white-cs md:items-start">
              <h5 className="text-desktop-h5 mb-3 text-center md:text-desktop-h6 lg:text-desktop-h5 lg:mb-4">
                Follow Us
              </h5>
              <ul className="flex items-center gap-x-3 lg:gap-x-4">
                <li>
                  <Link href={"www.facebook.com"}>
                    <Icons.Facebook className="lg:h-8 lg:w-8" />
                  </Link>
                </li>
                <li>
                  <Link href={"www.instagram.com"}>
                    <Icons.Instagram className="lg:h-8 lg:w-8" />
                  </Link>
                </li>
                <li>
                  <Link href={"www.twitter.com"}>
                    <Icons.Twitter className="lg:h-8 lg:w-8" />
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-body-md font-medium mb-2 text-white-cs text-center md:text-left md:font-normal lg:text-body-xl lg:text-[20px] lg:mb-4 lg:whitespace-nowrap">
                Subscribe our Newsletter
              </p>
              <div className="relative">
                <Icons.Envelop className="absolute left-1 top-1/2 -translate-y-1/2" />
                <Input placeholder="example@gmail.com" className="pl-8 py-2" />
                <button className="absolute right-1 top-1/2 -translate-y-1/2 text-body-md font-medium text-white-cs p-1 rounded-[4px] bg-primary-500">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <p className="text-body-xs text-white-cs text-center mt-8 lg:mt-[52px]">
          @plantify {new Date().getFullYear()}.All rights reserves
        </p>
      </div>
    </footer>
  );
}
