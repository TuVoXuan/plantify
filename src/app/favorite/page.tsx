import Icons from "@/components/icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import tree1 from "../../assets/images/Tree1.png";

export default function Favorite() {
  return (
    <main className="bg-neutral-50">
      <section
        className={cn("container-cs px-4 pt-[96px] pb-20", "md:pt-20 md:pb-[88px] md:px-0 xl:pt-[104px] xl:pb-[140px]")}
      >
        <Breadcrumb className="hidden md:block mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/" className="text-neutral-400 text-body-md xl:text-body-lg font-medium">
                  Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-neutral-400" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-primary-500 text-body-md xl:text-body-lg font-medium">
                My Cart
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h3 className="text-desktop-h6 text-neutral-900 mb-4 md:text-desktop-h5 xl:text-desktop-h2 xl:mb-5">
          My Favorite
        </h3>
        <div className="bg-white-cs rounded-[4px] border border-neutral-100 px-3 md:p-5 md:rounded-lg xl:p-6">
          {new Array(5).fill(0).map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-3 border-b border-b-neutral-200 last:border-none xl:py-4"
            >
              <div className="flex items-center gap-x-2 md:gap-x-4 md:w-[248px] xl:gap-x-5">
                <div className="relative w-12 h-12 pt-[6px] pb-[7px] md:w-[72px] md:h-[72px] md:py-3 xl:h-20 xl:w-20">
                  <Image src={tree1.src} alt="tree image" layout="fill" className="w-full h-auto object-contain" />
                </div>
                <div className="md:flex md:items-center">
                  <p className="text-body-md text-neutral-900 mb-1 md:mb-0 xl:text-body-lg xl:font-medium">
                    Plant for Home
                  </p>
                  <div className="flex items-center gap-x-2 md:hidden">
                    <span className="text-neutral-900 text-body-md">25 $</span>
                    <span className="text-neutral-400 text-body-sm line-through decoration-1 decoration-neutral-300">
                      35 $
                    </span>
                  </div>
                </div>
              </div>

              <div className="hidden md:block space-y-2">
                <p className="text-body-lg text-neutral-900 xl:text-body-xl xl:font-medium">25 $</p>
                <p className="text-body-lg text-neutral-600 line-through decoration-neutral-600 decoration-1 xl:text-body-lg xl:font-medium">
                  25 $
                </p>
              </div>

              <button className="text-white text-body-md font-medium py-2 bg-primary-500 hover:bg-primary-400 rounded-[4px] flex justify-center w-[102px] md:text-body-lg md:w-[125px]">
                Add to Cart
              </button>

              <button className="flex items-center justify-center w-9 h-9 rounded-[4px] border border-neutral-300 xl:h-10 xl:w-10">
                <Icons.Trash className="xl:h-6 xl:w-6" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
