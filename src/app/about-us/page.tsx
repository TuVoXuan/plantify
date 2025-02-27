"use client";

import Image from "next/image";

import { Carousel, CarouselApi, CarouselContent, CarouselItem, useDotButton } from "@/components/ui/carousel";
import { useState } from "react";

import Checked from "../../assets/images/Checked.svg";
import facebook from "../../assets/images/ic_baseline-facebook.svg";
import instagram from "../../assets/images/Instagram.svg";
import twitter from "../../assets/images/Twitter.svg";

import person1 from "../../assets/images/avatar1.jpg";
import person2 from "../../assets/images/avatar2.jpg";
import person3 from "../../assets/images/avatar3.jpg";
import person4 from "../../assets/images/avatar4.jpg";
import person5 from "../../assets/images/avatar5.jpg";

import plantForOffice from "../../assets/images/StoryImage.png";
import plantForHome from "../../assets/images/CEOImage.png";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

const reviews = [
  {
    rate: 5,
    comment:
      "Excellent experience! The service was top-notch, and I would highly recommend it to anyone looking for quality.",
    avatar: person1.src,
    name: "Mizanur Rahman",
  },
  {
    rate: 4,
    comment: "Very good overall. Some minor issues, but nothing that would stop me from coming back again!",
    avatar: person2.src,
    name: "Sophia Johnson",
  },
  {
    rate: 5,
    comment: "Average experience. It was okay, but I expected a bit more based on the reviews.",
    avatar: person3.src,
    name: "Ethan Williams",
  },
  {
    rate: 5,
    comment: "Absolutely fantastic! Everything exceeded my expectations, and I will definitely return.",
    avatar: person4.src,
    name: "Olivia Brown",
  },
  {
    rate: 5,
    comment: "Not the best experience. There were quite a few issues that need improvement.",
    avatar: person5.src,
    name: "Liam Miller",
  },
];

const stats = [
  { value: "65000+", label: "Plants Collection" },
  { value: "20+", label: "Popular Categories" },
  { value: "10500+", label: "Happy Customers" },
  { value: "255+", label: "Physical Stores" },
];

const MAX_STAR_REVIEW = 5;
const HARD_VALUE_ARRAY = 0;

export default function Home() {
  const [whatTheySayCarousel, setWhatTheySayCarousel] = useState<CarouselApi>();
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(whatTheySayCarousel);

  return (
    <main className="bg-neutral-50 pt-[96px]">
      {/* Plan for Office and Home */}
      <section>
        <div className="container-cs px-4 flex flex-col gap-y-12 pb-12 md:gap-y-14  xl:gap-y-[120px] md:pb-[72px]  xl:gap-x-20 xl:pb-[120px]">
          <div className="flex flex-col gap-y-5 md:flex-row md:items-center md:gap-x-12 xl:gap-x-20">
            <div className="flex flex-col items-center md:w-[270px] md:items-start md:shrink-0 xl:w-[466px]">
              <h3 className="text-body-md  xl:text-body-xl text-primary-500 mb-2 xl:mb-4 ">Our Story</h3>
              <p className="text-desktop-h6 md:text-desktop-h5 xl:text-desktop-h1 text-center md:text-left text-neutral-900 sm:whitespace-normal whitespace-nowrap">
                We provide the best quality Plants in Bangladesh!
              </p>
              <p className="text-body-sm md:text-body-md xl:text-body-lg text-center md:text-left text-neutral-600 my-3 md:mb-6 xl:mb-8">
                Welcome to Iconic Style, your premier destination for exquisite fashion products including three-piece
                ensembles and sarees. At Iconic Style, we believe that fashion is a
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-0.5 xl:gap-2">
                  <div className="w-4 h-4 xl:w-6 xl:h-6 relative">
                    <Image src={Checked} alt="checked" layout="fill" objectFit="contain" />
                  </div>
                  <p className="text-body-md text-neutral-900 xl:text-body-xl">100% Customer Satisfaction</p>
                </div>

                <div className="flex items-center gap-0.5 xl:gap-2">
                  <div className="w-4 h-4  xl:w-6 xl:h-6 relative">
                    <Image src={Checked} alt="checked" layout="fill" objectFit="contain" />
                  </div>
                  <p className="text-body-md text-neutral-900 xl:text-body-xl">Variety of collections</p>
                </div>

                <div className="flex items-center gap-0.5 xl:gap-2">
                  <div className="w-4 h-4 xl:w-6 xl:h-6 relative">
                    <Image src={Checked} alt="checked" layout="fill" objectFit="contain" />
                  </div>
                  <p className="text-body-md text-neutral-900 xl:text-body-xl">Fresh in quality</p>
                </div>
              </div>
            </div>
            <div className="relative w-full h-[217px] md:h-[217px] xl:h-[367px] rounded-[4px]">
              <Image src={plantForOffice.src} fill className="object-center object-cover" alt="plant for office" />
            </div>
          </div>

          <div className="flex flex-col gap-y-5 md:flex-row-reverse md:items-center md:gap-x-12 xl:gap-x-20">
            <div className="flex flex-col items-center md:w-[270px] md:items-start md:shrink-0 xl:w-[466px]">
              <h3 className="text-body-md  xl:text-body-xl  text-primary-500 mb-2 xl:mb-4 ">Story of CEO</h3>
              <p className=" text-desktop-h6 md:text-desktop-h5 xl:text-desktop-h1 text-center md:text-left text-neutral-900 ">
                A Journey through the plants to the Natural beauty.
              </p>
              <p className="text-body-sm md:text-body-md xl:text-body-lg text-center md:text-left text-neutral-600 my-3 md:mb-6 xl:mb-8">
                Welcome to Iconic Style, your premier destination for exquisite fashion products including three-piece
                ensembles and sarees. At Iconic Style, we believe that fashion is a r exquisite fashion products
              </p>
              <div className="flex gap-2">
                <Image src={facebook} alt="Facebook" width={20} height={20} className="w-5 h-5 xl:w-8 xl:h-8" />
                <Image src={instagram} alt="Instagram" width={20} height={20} className="w-5 h-5 xl:w-8 xl:h-8" />
                <Image src={twitter} alt="Twitter" width={20} height={20} className="w-5 h-5 xl:w-8 xl:h-8" />
              </div>
            </div>
            <div className="relative w-full h-[217px] md:h-[230px] xl:h-[388px] rounded-[4px]">
              <Image src={plantForHome.src} fill className="object-center object-cover" alt="plant for office" />
            </div>
          </div>
        </div>
      </section>
      {/* statistics */}
      <section>
        <div className="flex justify-center m-0 p-0">
          <div className="w-full grid grid-cols-2 gap-6 xl:gap-8 bg-primary-700 py-[24px] px-[35px] md:py-[48px] xl:py-[80px] md:flex md:justify-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="xl:w-[202px] h-[84px] xl:h-[150px] bg-white rounded-lg flex flex-col items-center justify-center p-2 xl:p-6 gap-[4px]"
              >
                <p className="text-neutral-900 text-desktop-h5 xl:text-desktop-h2">{stat.value}</p>
                <p className="text-neutral-600 text-body-md xl:text-body-xl whitespace-nowrap ">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* What people says */}
      <section className="bg-primary-50 mt-[48px] mb-[80px] sm:mt-[64px] sm:mb-[88px] xl:mt-[120px] xl:mb-[140px]">
        <div className="container-cs px-4 py-[34px] md:py-[48px] md:px-0">
          <h2 className="text-desktop-h5 md:text-desktop-h4 xl:text-desktop-h1 text-neutral-900 text-center mb-3 md:mb-4 xl:mn-5">
            What People Says
          </h2>
          <p className="text-body-sm text-neutral-600 mb-6 text-center md:text-body-md md:mb-8 xl:text-body-xl xl:mb-[48px]">
            Gorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet
          </p>

          <Carousel setApi={setWhatTheySayCarousel}>
            <CarouselContent>
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="basis-[90%] md:basis-auto">
                  <div className="bg-white-cs rounded-[4px] py-6 px-4 md:w-[340px] md:h-[168px] xl:rounded-[8px] xl:w-[410px] xl:h-[191px] xl:py-4 xl:px-5">
                    <div className="flex items-center gap-x-1 mb-2 md:mb-3 xl:gap-x-[5px] xl:mb-4">
                      {new Array(review.rate).fill(HARD_VALUE_ARRAY).map((_, index) => (
                        <Star key={index} className="h-3 w-3 xl:h-[14px] xl:w-[14px] stroke-[#FF9900] fill-[#FF9900]" />
                      ))}
                      {new Array(MAX_STAR_REVIEW - review.rate).fill(HARD_VALUE_ARRAY).map((_, index) => (
                        <Star key={index} className="h-3 w-3 xl:h-[14px] xl:w-[14px]" />
                      ))}
                    </div>
                    <p className="text-body-md text-neutral-600 mb-2 md:mb-3 xl:text-body-lg xl:mb-4">
                      {review.comment}
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="relative h-6 w-6 xl:h-10 xl:w-10 overflow-hidden rounded-full">
                        <Image src={review.avatar} fill alt={review.name} className="object-cover" />
                      </div>
                      <p className="text-body-lg font-medium text-neutral-900">{review.name}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="flex items-center gap-x-2 w-full justify-center mt-6 md:mt-8 xl:mt-[48px] xl:gap-x-[13px]">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={cn(
                  index === selectedIndex
                    ? 'h-4 w-4 xl:h-[25px] xl:w-[25px] relative rounded-full border-[1px] border-primary-300 bg-transparent before:content[""] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:h-[7px] before:w-[7px] xl:before:h-[11px] xl:before:w-[11px] before:bg-primary-500 before:rounded-full'
                    : "h-2 w-2 xl:h-[11px] xl:w-[11px] bg-primary-200 rounded-full",
                )}
              ></button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
