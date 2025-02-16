"use client";
import bannerBg from "../assets/images/BannerBg.png";
import bannerImage from "../assets/images/BannerImage.png";
import Image from "next/image";
import succulents from "../assets/images/Succulents.png";
import bonsaiPlants from "../assets/images/BonsaiPlants.png";
import carnivorous from "../assets/images/Carnivorous.png";
import floweringPlants from "../assets/images/FloweringPlants.png";
import foliagePlants from "../assets/images/FoliagePlants.png";
import herbsPlants from "../assets/images/HerbsPlants.png";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useState } from "react";
import CategoryTag from "@/components/category-tag";
import ProductCard from "@/components/product-card";

const plantCategories = [
  { thumbnail: succulents, title: "Succulents" },
  { thumbnail: bonsaiPlants, title: "Bonsai Plants" },
  { thumbnail: carnivorous, title: "Carnivorous" },
  { thumbnail: floweringPlants, title: "Flowering Plants" },
  { thumbnail: foliagePlants, title: "Foliage Plants" },
  { thumbnail: herbsPlants, title: "Herbs Plants" },
];

const categoryTags = ["Weeping Fig", "Rubber Plant", "Parlor Palm", "Dragon Tree", "Lemon Lime"];

export default function Home() {
  const [activeCategoryTag, setActiveCategoryTag] = useState<string>("Weeping Fig");

  return (
    <main className="bg-neutral-50">
      {/* Banner */}
      <section className="bg-no-repeat" style={{ backgroundImage: `url(${bannerBg.src})` }}>
        <div className="px-4 pt-[104px] container-cs md:px-0 mb:pb-[7px] md:flex md:items-center md:pt-[64px] xl:pt-[88px] xl:gap-x-8 xl:pb-[44px]">
          <div className="w-[305px] mx-auto flex flex-col items-center mb-8 md:mx-0 md:items-start md:w-[333px] xl:w-[565px]">
            <h2 className="text-desktop-h2 text-primary-800 text-center mb-3 md:text-left md:mb-4 xl:text-desktop-md xl:mb-6">
              Green up Your Space into nature
            </h2>
            <p className="text-body-md text-neutral-600 text-center mb-6 md:text-left xl:text-body-xl xl:mb-10">
              Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.
            </p>
            <button className="py-2 px-6 rounded-[4px] bg-primary-500 hover:bg-primary-400 xl:px-[30.5px] xl:py-3">
              <span className="text-body-lg font-medium text-white-cs">Shop Now</span>
            </button>
          </div>
          <div className="ml-auto xl:ml-0">
            <Image
              src={bannerImage}
              height={568}
              width={683}
              alt="banner image"
              className="w-full h-auto md:w-[421px] md:h-[334px] xl:w-[683px] xl:h-auto"
            />
          </div>
        </div>
      </section>
      {/* Categories */}
      <section>
        <Carousel className="container-cs px-4 pt-10 pb-[56px] md:pt-[72px] md:pb-[64px] md:px-0 xl:pt-[48px] xl:pb-[112px]">
          <CarouselContent className="-ml-5 md:-ml-[27.2px] xl:-ml-[64px]">
            {plantCategories.map((cate) => (
              <CarouselItem key={cate.title} className="pl-5 md:pl-[27.2px] xl:pl-[64px] basis-auto max-w-full">
                <div key={cate.title} className="cursor-pointer w-fit flex flex-col gap-2 items-center xl:gap-y-5">
                  <div className="h-[76px] w-[76px] md:w-[93px] md:h-[93px] xl:h-[160px] xl:w-[160px] bg-white-cs rounded-t-full pt-[13px] pb-[6px] px-[10px] md:pt-[16.27px] md:px-[11.62px] md:pb-[6.98px] xl:pt-[28px] xl:px-5 xl:pb-3">
                    <div className="h-[57px] w-[57px] md:w-[69.75px] md:h-[69.75px] xl:w-[120px] xl:h-[120px]">
                      <Image
                        src={cate.thumbnail.src}
                        height={cate.thumbnail.height}
                        width={cate.thumbnail.width}
                        alt={cate.title}
                      />
                    </div>
                  </div>
                  <span className="select-none text-neutral-900 text-body-md md:text-body-lg xl:text-body-xl font-medium xl:font-semibold whitespace-nowrap">
                    {cate.title}
                  </span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
      {/* Most Popular Product */}
      <section>
        <div className="container-cs px-4 mb-6 md:flex md:flex-col md: items-center md:mb-8 xl:mb-[48px]">
          <h1 className="text-desktop-h5 text-center text-neutral-900 mb-4 md:text-desktop-h4 md:mb-5 xl:text-desktop-h1 xl:mb-10">
            Most Popular Product
          </h1>

          <div className="flex gap-x-2 overflow-x-auto xl:gap-x-3" style={{ scrollbarWidth: "none" }}>
            {categoryTags.map((cate) => (
              <CategoryTag
                className="shrink-0"
                title={cate}
                key={cate}
                isActive={activeCategoryTag === cate}
                onClick={() => setActiveCategoryTag(cate)}
              />
            ))}
          </div>
        </div>

        <div className="container-cs grid grid-cols-2 gap-x-[11px] gap-y-3 px-4 pb-[64px] md:grid-cols-4 md:gap-x-[18px] md:gap-y-5 md:px-0 xl:gap-x-6 xl:gap-y-8">
          {new Array(8).fill(0).map((_item, index) => (
            <ProductCard key={index} tagLabel="NEW" tagType="new" />
          ))}
        </div>
      </section>
    </main>
  );
}
