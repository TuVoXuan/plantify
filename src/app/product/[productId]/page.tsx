import React from "react";
import tree1 from "../../../assets/images/Tree1.png";
import tree2 from "../../../assets/images/Tree2.png";
import tree3 from "../../../assets/images/Tree3.png";
import tree4 from "../../../assets/images/Tree4.png";
import tree5 from "../../../assets/images/Tree5.png";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import Icons from "@/components/icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

const otherTreeImgs = [tree2.src, tree3.src, tree4.src, tree5.src];
const MAX_STAR_REVIEW = 5;
const HARD_VALUE_ARRAY = 0;

export default function ProductDetailsPage() {
  return (
    <main className="bg-neutral-50">
      <section className="mb-12">
        <div className="container-cs px-4 pt-[96px] md:px-0 md:pt-20">
          <div className="hidden md:block md:mb-6">
            <Breadcrumb className="hidden md:block">
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
                  <BreadcrumbLink asChild>
                    <Link href="/" className="text-neutral-400 text-body-md xl:text-body-lg font-medium">
                      Shop
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-neutral-400" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-primary-500 text-body-md xl:text-body-lg font-medium">
                    Shop
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="space-y-6 md:space-y-0 md:flex md:gap-x-6">
            <div className="md:flex md:flex-row-reverse md:flex-1 md:gap-x-4">
              <div className="bg-white-cs rounded-lg py-[59.87px] w-full h-[350px] mb-4 md:flex-1 md:h-[296px]">
                <div className="relative w-full h-full">
                  <Image src={tree1.src} fill sizes="100%" className="object-contain" alt="tree image" />
                </div>
              </div>
              <div className="flex gap-x-2 md:flex-col md:gap-y-2 md:shrink-0">
                {otherTreeImgs.map((tree, index) => (
                  <div
                    key={index}
                    className={cn(
                      "bg-white-cs rounded-[4px] py-2 h-[68px] w-[60px]",
                      index === 0 && "border border-primary-500",
                    )}
                  >
                    <div className="relative w-full h-full">
                      <Image src={tree} fill sizes="100%" className="object-contain" alt="tree image" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:flex-1">
              <h2 className="text-desktop-h6 text-neutral-900 md:text-desktop-h5">
                Indoor pulp Tree Potted plant for Home
              </h2>
              <div className="mb-3 w-fit py-[2px] px-1 rounded-[4px] bg-success-100 text-success-700 text-body-sm font-medium">
                Instock
              </div>

              <p className="hidden md:block text-body-md text-neutral-600 mb-3">
                Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
              </p>
              <div className="flex items-center mb-3 md:mb-4">
                <div className="flex items-center gap-x-[2px]">
                  {new Array(5).fill(HARD_VALUE_ARRAY).map((_, index) => (
                    <Star key={index} className="h-4 w-4 stroke-[#EAB308] fill-[#EAB308]" />
                  ))}
                  {new Array(MAX_STAR_REVIEW - 5).fill(HARD_VALUE_ARRAY).map((_, index) => (
                    <Star key={index} className="h-4 w-4" />
                  ))}
                </div>
                <p className="text-body-sm font-bold text-neutral-600 ml-2">4.5</p>
                <div className="h-[9.72px] w-[0.65px] bg-neutral-300 mx-[6.48px]"></div>
                <p className="text-body-sm font-medium text-neutral-600">150 Review</p>
                <div className="h-[9.72px] w-[0.65px] bg-neutral-300 mx-[6.48px]"></div>
                <p className="text-body-sm font-medium text-neutral-600">2050 Sold</p>
              </div>
              <div className="flex items-center gap-x-3 mb-3 md:mb-4">
                <p className="text-desktop-h4 text-neutral-900 md:text-desktop-h5">25$</p>
                <p className="text-[14px] leading-[22px] font-dm-serif-display line-through text-neutral-500">35$</p>
                <p className="text-body-sm font-medium text-success-600">10%off</p>
              </div>
              <p className="text-body-sm text-neutral-600 mb-4 md:hidden">
                Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
              </p>

              <div className="mb-4">
                <p className="text-body-md font-medium text-neutral-900 mb-3 md:mb-2">Quantity</p>
                <div className="bg-neutral-100 flex items-center gap-x-5 py-2 px-4 w-fit md:py-1 md:px-2">
                  <button>
                    <Icons.Minus className="md:h-5 md:w-5" />
                  </button>
                  <div className="text-body-md font-medium text-neutral-600 md:text-body-lg">02</div>
                  <button>
                    <Icons.Plus className="md:h-5 md:w-5" />
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-x-4">
                <button className="flex items-center gap-x-2 bg-primary-500 text-white-cs text-body-lg rounded-[4px] py-2 justify-center w-full md:px-5 md:w-fit">
                  <Icons.ShoppingBag className="h-6 w-6 text-white-cs" />
                  Add to Cart
                </button>
                <button className="flex items-center gap-x-2 bg-neutral-200 text-neutral-600 text-body-lg rounded-[4px] py-2 justify-center w-full md:px-5 md:w-fit">
                  <Icons.Heart className="h-6 w-6 text-neutral-600" />
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
