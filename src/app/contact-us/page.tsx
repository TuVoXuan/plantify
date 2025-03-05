import Icons from "@/components/icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function ContactUs() {
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
                Contact Us
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid grid-cols-1 gap-y-12 md:gap-y-0 md:grid-cols-7 md:gap-x-12 xl:grid-cols-4 xl:gap-x-[186px]">
          <div className="md:col-span-3 xl:col-span-2">
            <h3 className="text-desktop-h6 text-neutral-900 mb-4 md:text-desktop-h5 xl:text-desktop-h2 xl:mb-5">
              Contact Us
            </h3>
            <p className="text-body-md text-neutral-600 mb-4 md:mb-10 xl:text-body-xl">
              {` "Have inquiries about our fashion offerings? Need assistance with orders or wholesale partnerships? Reach
              out to us, and we'll provide the support you require."`}
            </p>
            <div className="space-y-4 xl:space-y-8">
              <div className="flex items-center gap-x-2 xl:gap-x-5">
                <div className="h-8 w-8 md:w-12 md:h-12 xl:w-16 xl:h-16 shrink-0 flex items-center justify-center rounded-full bg-primary-50">
                  <Icons.Location className="md:w-6 md:h-6 xl:w-8 xl:h-8" />
                </div>
                <p className="text-body-sm font-medium text-neutral-900 md:text-body-md xl:text-body-xl">
                  1/4 1st Floor , Tolarbagh, Mirpur, Dhaka, Bangladesh
                </p>
              </div>
              <div className="flex items-center gap-x-2 xl:gap-x-5">
                <div className="h-8 w-8 md:w-12 md:h-12 xl:w-16 xl:h-16 shrink-0 flex items-center justify-center rounded-full bg-primary-50">
                  <Icons.Phone className="md:w-[18px] md:h-[18px] xl:h-6 xl:w-6" />
                </div>
                <div>
                  <p className="text-body-sm text-neutral-600 md:text-body-md xl:text-body-lg">Call Us </p>
                  <p className="text-body-sm font-medium text-neutral-900 md:text-body-md xl:text-body-lg">
                    +8801305-093231
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-x-2 xl:gap-x-5">
                <div className="h-8 w-8 md:w-12 md:h-12 xl:w-16 xl:h-16 shrink-0 flex items-center justify-center rounded-full bg-primary-50">
                  <Icons.Email className="md:w-[18px] md:h-[18px] xl:h-6 xl:w-6" />
                </div>
                <div>
                  <p className="text-body-sm text-neutral-600 md:text-body-md xl:text-body-lg">Email Us</p>
                  <p className="text-body-sm font-medium text-neutral-900 md:text-body-md xl:text-body-lg">
                    iconicstyle19@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 xl:col-span-2">
            <div className="space-y-3">
              <div>
                <label className="text-body-md font-medium text-neutral-900 xl:text-body-lg xl:font-medium">Name</label>
                <div className="relative mt-2">
                  <Icons.User1 className="absolute left-4 top-1/2 -translate-y-1/2" />
                  <Input className="h-10 pl-12 text-body-md pr-4 xl:text-body-lg" placeholder="Type your name" />
                </div>
              </div>
              <div>
                <label className="text-body-md font-medium text-neutral-900 xl:text-body-lg xl:font-medium">
                  Contact Number
                </label>
                <div className="relative mt-2">
                  <Icons.PhoneOutline className="absolute left-4 top-1/2 -translate-y-1/2" />
                  <Input className="h-10 pl-12 text-body-md pr-4 xl:text-body-lg" placeholder="Type your phone" />
                </div>
              </div>
              <div>
                <label className="text-body-md font-medium text-neutral-900 xl:text-body-lg xl:font-medium">
                  Email Address
                </label>
                <div className="relative mt-2">
                  <Icons.Envelop className="absolute left-4 top-1/2 -translate-y-1/2" />
                  <Input className="h-10 pl-12 text-body-md pr-4 xl:text-body-lg" placeholder="Type your phone" />
                </div>
              </div>
              <div>
                <label className="text-body-md font-medium text-neutral-900 xl:text-body-lg xl:font-medium">
                  Your Message
                </label>
                <Textarea className="h-[95px] mt-2 text-body-md py-4 xl:text-body-lg" placeholder="Type your message" />
              </div>
            </div>

            <button className="xl:py-3 mt-8 text-body-lg font-medium text-white bg-primary-500 hover:bg-primary-400 py-2 w-full rounded-[4px] flex justify-center">
              Submit
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
