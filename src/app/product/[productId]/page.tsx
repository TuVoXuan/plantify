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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const otherTreeImgs = [tree2.src, tree3.src, tree4.src, tree5.src];
const MAX_STAR_REVIEW = 5;
const HARD_VALUE_ARRAY = 0;

export default function ProductDetailsPage() {
  return (
    <main className="bg-neutral-50">
      <section className="pb-12 md:pb-[56px] xl:pb-[72px]">
        <div className="container-cs px-4 pt-[96px] md:px-0 md:pt-20 xl:pt-[104px]">
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
                    Indoor pulp Tree Potted plant for Home
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="space-y-6 md:space-y-0 md:flex md:gap-x-6 xl:gap-x-[72px]">
            <div className="md:flex md:flex-row-reverse md:flex-1 md:gap-x-4 xl:max-w-[562px] xl:gap-x-6">
              <div className="bg-white-cs rounded-lg py-[59.87px] w-full h-[350px] mb-4 md:mb-0 md:flex-1 md:h-[296px] xl:h-[456px] xl:py-[78px]">
                <div className="relative w-full h-full">
                  <Image src={tree1.src} fill sizes="100%" className="object-contain" alt="tree image" />
                </div>
              </div>
              <div className="flex gap-x-2 md:flex-col md:gap-y-2 md:shrink-0 xl:gap-y-3">
                {otherTreeImgs.map((tree, index) => (
                  <div
                    key={index}
                    className={cn(
                      "bg-white-cs rounded-[4px] py-2 h-[68px] w-[60px] xl:w-[93px] xl:h-[105px]",
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

            <div className="md:flex-1 xl:max-w-[529px]">
              <h2 className="text-desktop-h6 text-neutral-900 md:text-desktop-h5 xl:text-desktop-h4">
                Indoor pulp Tree Potted plant for Home
              </h2>
              <div className="mb-3 w-fit py-[2px] px-1 rounded-[4px] bg-success-100 text-success-700 text-body-sm font-medium xl:text-body-md xl:font-semibold xl:px-[6px] xl:mb-4">
                Instock
              </div>

              <p className="hidden md:block text-body-md text-neutral-600 mb-3 xl:text-body-lg xl:mb-4">
                Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
              </p>
              <div className="flex items-center mb-3 md:mb-4 xl:mb-8">
                <div className="flex items-center gap-x-[2px]">
                  {new Array(5).fill(HARD_VALUE_ARRAY).map((_, index) => (
                    <Star key={index} className="h-4 w-4 xl:h-5 xl:w-5 stroke-[#EAB308] fill-[#EAB308]" />
                  ))}
                  {new Array(MAX_STAR_REVIEW - 5).fill(HARD_VALUE_ARRAY).map((_, index) => (
                    <Star key={index} className="h-4 w-4 xl:h-5 xl:w-5" />
                  ))}
                </div>
                <p className="text-body-sm font-bold text-neutral-600 ml-2 xl:text-body-lg xl:font-medium">4.5</p>
                <div className="h-[9.72px] w-[0.65px] bg-neutral-300 mx-[6.48px] xl:h-[15px] xl:mx-3"></div>
                <p className="text-body-sm font-medium text-neutral-600 xl:text-body-lg xl:font-medium">150 Review</p>
                <div className="h-[9.72px] w-[0.65px] bg-neutral-300 mx-[6.48px] xl:h-[15px] xl:mx-3"></div>
                <p className="text-body-sm font-medium text-neutral-600 xl:text-body-lg xl:font-medium">2050 Sold</p>
              </div>
              <div className="flex items-center gap-x-3 mb-3 md:mb-4 xl:mb-12">
                <p className="text-desktop-h4 text-neutral-900 md:text-desktop-h5 xl:text-desktop-h2">25$</p>
                <p className="text-[14px] leading-[22px] font-dm-serif-display line-through decoration-1 text-neutral-500 xl:text-[20px] xl:leading-[28px]">
                  35$
                </p>
                <p className="text-body-sm font-medium text-success-600 xl:text-body-xl">10%off</p>
              </div>
              <p className="text-body-sm text-neutral-600 mb-4 md:hidden">
                Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
              </p>

              <div className="mb-4 xl:mb-12">
                <p className="text-body-md font-medium text-neutral-900 mb-3 md:mb-2 xl:text-body-lg xl:mb-4">
                  Quantity
                </p>
                <div className="bg-neutral-100 flex items-center gap-x-5 py-2 px-4 w-fit md:py-1 md:px-2 xl:py-2 xl:px-3">
                  <button>
                    <Icons.Minus className="md:h-5 md:w-5 xl:h-6 xl:w-6" />
                  </button>
                  <div className="text-body-md font-medium text-neutral-600 md:text-body-lg">02</div>
                  <button>
                    <Icons.Plus className="md:h-5 md:w-5 xl:h-6 xl:w-6" />
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-x-4">
                <button className="flex items-center gap-x-2 bg-primary-500 text-white-cs text-body-lg rounded-[4px] py-2 justify-center w-full md:px-5 md:w-fit xl:font-medium xl:py-3">
                  <Icons.ShoppingBag className="h-6 w-6 text-white-cs" />
                  Add to Cart
                </button>
                <button className="flex items-center gap-x-2 bg-neutral-200 text-neutral-600 text-body-lg rounded-[4px] py-2 justify-center w-full md:px-5 md:w-fit xl:font-medium xl:py-3">
                  <Icons.Heart className="h-6 w-6 text-neutral-600" />
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-cs px-4 pb-16">
          <Tabs defaultValue="productDescription">
            <TabsList className="gap-x-16">
              <TabsTrigger
                value="productDescription"
                className="px-0 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 font-dm-serif-display text-[14px] leading-[22px] py-3 text-neutral-600 data-[state=active]:text-primary-500 data-[state=active]:shadow-none border-b-[1px] border-b-transparent data-[state=active]:border-b-primary-500"
              >
                PRODUCT DESCRIPTION
              </TabsTrigger>
              <TabsTrigger
                value="review"
                className="px-0 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 font-dm-serif-display text-[14px] leading-[22px] py-3 text-neutral-600 data-[state=active]:text-primary-500 data-[state=active]:shadow-none border-b-[1px] border-b-transparent data-[state=active]:border-b-primary-500"
              >
                REVIEW
              </TabsTrigger>
            </TabsList>
            <TabsContent value="productDescription" className="px-4 mt-5">
              <ul className="list-disc space-y-2">
                <li className="text-body-md text-neutral-600">
                  Shipping & Import Fees Deposit to Bangladesh Details vailable at a lower price from other
                </li>
                <li className="text-body-md text-neutral-600">Sellers that may not offer free Prime shipping.</li>
                <li className="text-body-md text-neutral-600">Case: Polished Gold-tone steel + black top ring</li>
                <li className="text-body-md text-neutral-600">Strap: Black silicone with buckle closure</li>
                <li className="text-body-md text-neutral-600">Strap Length: 190mm</li>
                <li className="text-body-md text-neutral-600">Dial Features: Day, date & 24 hr int'l time display</li>
                <li className="text-body-md text-neutral-600">Dial Features: Day, date & 24 hr int'l time display</li>
                <li className="text-body-md text-neutral-600">Dial Color: Black</li>
              </ul>
            </TabsContent>
            <TabsContent value="review" className="mt-5">
              <div className="bg-white-cs rounded-[4px] py-2 px-4 flex gap-x-4">
                <div className="flex flex-col justify-center items-center pr-6 relative after:content[''] after:absolute after:right-0 after:h-full after:w-[1px] after:bg-neutral-200">
                  <p className="text-body-xl font-semibold text-neutral-900">4.8</p>
                  <div className="flex items-center gap-x-[2px] mb-1">
                    <Star className="h-4 w-4 stroke-[#EAB308] fill-[#EAB308]" />
                    <Star className="h-4 w-4 stroke-[#EAB308] fill-[#EAB308]" />
                    <Star className="h-4 w-4 stroke-[#EAB308] fill-[#EAB308]" />
                    <Star className="h-4 w-4 stroke-[#EAB308] fill-[#EAB308]" />
                    <Star className="h-4 w-4 stroke-neutral-400 fill-neutral-400" />
                  </div>
                  <p className="text-body-sm text-neutral-600">54 reviews</p>
                </div>
                <div className="flex-1 space-y-[2px] pb-[7px]">
                  <div className="flex items-center gap-x-1">
                    <span className="w-4 shrink-0 text-body-sm">5</span>
                    <div className="relative bg-neutral-200 h-1 w-full rounded-[4px] after:content[''] after:absolute after:h-1 after:w-[80%] after:bg-[#F59E0B] after:rounded-[4px]"></div>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <span className="w-4 shrink-0 text-body-sm">4</span>
                    <div className="relative bg-neutral-200 h-1 w-full rounded-[4px] after:content[''] after:absolute after:h-1 after:w-[60%] after:bg-[#F59E0B] after:rounded-[4px]"></div>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <span className="w-4 shrink-0 text-body-sm">3</span>
                    <div className="relative bg-neutral-200 h-1 w-full rounded-[4px] after:content[''] after:absolute after:h-1 after:w-[50%] after:bg-[#F59E0B] after:rounded-[4px]"></div>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <span className="w-4 shrink-0 text-body-sm">2</span>
                    <div className="relative bg-neutral-200 h-1 w-full rounded-[4px] after:content[''] after:absolute after:h-1 after:w-[30%] after:bg-[#F59E0B] after:rounded-[4px]"></div>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <span className="w-4 shrink-0 text-body-sm">1</span>
                    <div className="relative bg-neutral-200 h-1 w-full rounded-[4px] after:content[''] after:absolute after:h-1 after:w-[10%] after:bg-[#F59E0B] after:rounded-[4px]"></div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  );
}
