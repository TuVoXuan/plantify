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
import tree1 from "../assets/images/Tree1.png";
import tree2 from "../assets/images/Tree2.png";
import tree3 from "../assets/images/Tree3.png";
import tree4 from "../assets/images/Tree4.png";
import tree5 from "../assets/images/Tree5.png";
import tree6 from "../assets/images/Tree6.png";
import Rectangle74 from "../assets/images/Rectangle3074.png";
import Rectangle75 from "../assets/images/Rectangle3075.png";

const plantCategories = [
  { thumbnail: succulents, title: "Succulents" },
  { thumbnail: bonsaiPlants, title: "Bonsai Plants" },
  { thumbnail: carnivorous, title: "Carnivorous" },
  { thumbnail: floweringPlants, title: "Flowering Plants" },
  { thumbnail: foliagePlants, title: "Foliage Plants" },
  { thumbnail: herbsPlants, title: "Herbs Plants" },
];

const categoryTags = ["Weeping Fig", "Rubber Plant", "Parlor Palm", "Dragon Tree", "Lemon Lime"];

const mostPopularTree = [
  {
    thumbnail: tree1.src,
    name: "Petlas MultiAction PT565",
    originalPrice: 25,
    discountPrice: 20,
    isNew: true,
  },
  {
    thumbnail: tree2.src,
    name: "Tourador X ALL CLIMATE TF1",
    originalPrice: 25,
    discountPrice: 20,
    isNew: true,
  },
  {
    thumbnail: tree3.src,
    name: "Kumho Solus 4S HA32",
    originalPrice: 25,
    discountPrice: 20,
    isNew: true,
  },
  {
    thumbnail: tree1.src,
    name: "Petlas MultiAction PT565",
    originalPrice: 25,
    discountPrice: 20,
    isNew: true,
  },
  {
    thumbnail: tree4.src,
    name: "Vineyard Reach",
    originalPrice: 25,
    discountPrice: 20,
    isNew: true,
  },
  {
    thumbnail: tree5.src,
    name: "Maxtrek Relamax 4seasons",
    originalPrice: 25,
    discountPrice: 20,
  },
  {
    thumbnail: tree3.src,
    name: "Hankook Kinergy 4S 2 (H750)",
    originalPrice: 25,
    discountPrice: 20,
    discount: 50,
  },
  {
    thumbnail: tree6.src,
    name: "Petlas MultiAction PT565",
    originalPrice: 25,
    discountPrice: 20,
    isNew: true,
  },
];

const plantData = [
  {
    imageSrc: Rectangle75,
    title: "Plant for Office",
    description:
      "Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per.",
    reverse: false,
  },
  {
    imageSrc: Rectangle74,
    title: "Plant for Your Home",
    description:
      "Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per.",
    reverse: true,
  },
];

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
          {mostPopularTree.map((tree, index) => (
            <ProductCard
              key={index}
              name={tree.name}
              thumbnail={tree.thumbnail}
              originalPrice={tree.originalPrice}
              discountPrice={tree.discountPrice}
              tagType={tree.isNew ? "new" : tree.discount ? "discount" : undefined}
              tagLabel={tree.isNew ? "NEW" : tree.discount ? `-${tree.discount}%` : undefined}
            />
          ))}
        </div>
      </section>
      {/* shop now */}
      <section>
        <div className="container-cs px-4 sm:px-12 mb-6 md:flex md:flex-col md:items-center md:mb-8 xl:mb-[48px] gap-12 md:gap-[56px] flex flex-col ">
          {plantData.map((plant, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${plant.reverse ? "md:flex-row-reverse" : ""} items-center gap-5 md:gap-12`}
            >
              <div className="w-full md:w-1/2">
                <Image
                  src={plant.imageSrc}
                  height={568}
                  width={683}
                  alt="banner image"
                  className="w-[361px] h-[319px] sm:w-[342px] sm:h-[302px] lg:w-[590px] lg:h-[521px] mx-auto"
                />
              </div>

              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h2 className="text-[#0F172A] text-desktop-h5 sm:text-desktop-h4 text-center md:text-left">
                  {plant.title}
                </h2>
                <p className="text-body-sm sm:text-body-md text-[#64748B] text-center md:text-left mb-5 mt-3">
                  {plant.description}
                </p>
                <div className="text-center md:text-left">
                  <button className="py-2 px-6 rounded-[4px] bg-primary-500 hover:bg-primary-400 xl:px-[30.5px] xl:py-3">
                    <span className="text-body-lg font-medium text-white-cs">Shop Now</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
