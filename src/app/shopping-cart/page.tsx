import Icons from "@/components/icons";
import Image from "next/image";
import tree1 from "../../assets/images/Tree1.png";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

export default function ShoppingCart() {
  return (
    <main className="bg-neutral-50">
      <section
        className={cn("container-cs px-4 pt-[92px] pb-20", "md:pt-20 md:pb-[88px] md:px-0 xl:pt-[104px] xl:pb-[140px]")}
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
        <div className="grid grid-cols-1 gap-y-12 md:gap-y-14 xl:grid-cols-12 xl:gap-x-12">
          <div className="xl:col-span-8">
            <h3 className="text-desktop-h6 text-neutral-900 mb-4 md:text-desktop-h5 xl:text-desktop-h2 xl:mb-5">
              My Cart
            </h3>
            <div className="bg-white-cs rounded-[4px] border border-neutral-100 px-3 md:p-5 md:rounded-lg xl:p-6">
              {new Array(5).fill(0).map((_, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 border-b border-b-neutral-200 last:border-none xl:py-4"
                >
                  <div className="flex items-center gap-x-2 md:gap-x-4 xl:gap-x-5">
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

                  <div className="flex items-center gap-x-4 py-2 px-3 md:gap-x-6 xl:gap-x-7">
                    <Icons.Minus className="h-4 w-4 xl:h-5 xl:w-5" />
                    <span className="text-body-md text-neutral-900 xl:text-body-lg">01</span>
                    <Icons.Plus className="h-4 w-4 xl:h-5 xl:w-5" />
                  </div>

                  <button className="flex items-center justify-center w-9 h-9 rounded-[4px] border border-neutral-300 xl:h-10 xl:w-10">
                    <Icons.Trash className="xl:h-6 xl:w-6" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white-cs rounded-[4px] py-6 px-5 border border-neutral-100 xl:h-fit xl:col-span-4">
            <h4 className="text-desktop-h6 pb-5 border-b border-b-neutral-300 text-center md:text-desktop-h5">
              Order Summery
            </h4>
            <div className="mt-6 space-y-4 md:space-y-5">
              <div className="flex justify-between items-center">
                <p className="text-body-md text-neutral-600 md:text-body-lg md:font-medium">Sub total ( 3 items )</p>
                <p className="text-body-md text-neutral-900 md:text-body-lg md:font-medium">$50</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-body-md text-neutral-600 md:text-body-lg md:font-medium">Shipping Fee</p>
                <p className="text-body-md text-neutral-900 md:text-body-lg md:font-medium">$5</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-body-md text-neutral-600 md:text-body-lg md:font-medium">Coupon code</p>
                <Input
                  placeholder="type code"
                  className="h-8 rounded-[4px] border-neutral-400 text-body-sm w-[156px] md:text-body-md"
                />
              </div>
              <div className="flex justify-between items-center">
                <p className="text-body-md text-neutral-600 md:text-body-lg md:font-medium">Discount</p>
                <p className="text-body-md text-neutral-900 md:text-body-lg md:font-medium">$0</p>
              </div>
              <div className="h-1 border-t border-dashed border-neutral-300"></div>
              <div className="flex justify-between items-center">
                <p className="text-body-lg font-medium text-neutral-900 md:text-body-xl md:text-[20px]">Total</p>
                <p className="text-body-lg font-medium text-neutral-900 md:text-body-xl md:text-[20px]">$55</p>
              </div>
            </div>

            <div className="mt-10 md:flex md:justify-center">
              <button className="text-body-lg text-white-cs bg-primary-500 hover:bg-primary-400 rounded-[4px] w-full flex justify-center py-2 md:w-[350px] xl:w-full">
                Process to Checkout
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
