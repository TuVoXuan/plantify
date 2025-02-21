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
import { Carousel, CarouselApi, CarouselContent, CarouselItem, useDotButton } from "@/components/ui/carousel";
import { useState } from "react";
import CategoryTag from "@/components/category-tag";
import ProductCard from "@/components/product-card";
import tree1 from "../assets/images/Tree1.png";
import tree2 from "../assets/images/Tree2.png";
import tree3 from "../assets/images/Tree3.png";
import tree4 from "../assets/images/Tree4.png";
import tree5 from "../assets/images/Tree5.png";
import tree6 from "../assets/images/Tree6.png";
import person1 from "../assets/images/avatar1.jpg";
import person2 from "../assets/images/avatar2.jpg";
import person3 from "../assets/images/avatar3.jpg";
import person4 from "../assets/images/avatar4.jpg";
import person5 from "../assets/images/avatar5.jpg";
import blog1 from "../assets/images/blog1.png";
import blog2 from "../assets/images/blog2.png";
import blog3 from "../assets/images/blog3.png";
import plantForOffice from "../assets/images/PlantForOffice.avif";
import plantForHome from "../assets/images/PlantForHome.avif";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import Icons from "@/components/icons";

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

const blogs = [
  {
    thumbnail: blog1.src,
    title: "How to choose best plant for you that make your house better.",
    author: "Akash Basak",
    releaseDate: "10 june 2024",
  },
  {
    thumbnail: blog2.src,
    title: "How to choose best plant for you that make your house better.",
    author: "Akash Basak",
    releaseDate: "10 june 2024",
  },
  {
    thumbnail: blog3.src,
    title: "How to choose best plant for you that make your house better.",
    author: "Akash Basak",
    releaseDate: "10 june 2024",
  },
];

const MAX_STAR_REVIEW = 5;
const HARD_VALUE_ARRAY = 0;

export default function Home() {
  const [activeCategoryTag, setActiveCategoryTag] = useState<string>("Weeping Fig");
  const [whatTheySayCarousel, setWhatTheySayCarousel] = useState<CarouselApi>();
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(whatTheySayCarousel);

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
      {/* Plan for Office and Home */}
      <section>
        <div className="container-cs px-4 flex flex-col gap-y-12 pb-16 md:gap-y-14 md:px-[47px] md:pb-[72px] xl:px-[72px] xl:gap-x-20 xl:pb-[120px]">
          <div className="flex flex-col gap-y-5 md:flex-row md:items-center md:gap-x-12 xl:gap-x-20">
            <div className="relative w-full h-[319px] md:h-[302px] xl:h-[521px]">
              <Image src={plantForOffice.src} fill className="object-center object-cover" alt="plant for office" />
            </div>

            <div className="flex flex-col items-center md:w-[270px] md:items-start md:shrink-0 xl:w-[466px]">
              <h3 className="text-desktop-h5 md:text-desktop-h4 xl:text-desktop-h1 text-neutral-900 mb-2 xl:mb-4">
                Plant for Office
              </h3>
              <p className="text-body-sm md:text-body-md xl:text-body-lg text-center md:text-left text-neutral-500 mb-5 md:mb-6 xl:mb-8">
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
                aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per.
              </p>
              <button className="text-body-lg font-medium text-white bg-primary-500 hover:bg-primary-400 rounded-[4px] py-2 px-6 xl:py-3 xl:px-[30.5px]">
                Shop Now
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-y-5 md:flex-row-reverse md:items-center md:gap-x-12 xl:gap-x-20">
            <div className="relative w-full h-[319px] md:h-[302px] xl:h-[521px]">
              <Image src={plantForHome.src} fill className="object-center object-cover" alt="plant for office" />
            </div>

            <div className="flex flex-col items-center md:w-[270px] md:items-start md:shrink-0 xl:w-[466px]">
              <h3 className="text-desktop-h5 md:text-desktop-h4 xl:text-desktop-h1 text-neutral-900 mb-2 xl:mb-4">
                Plant for Your Office
              </h3>
              <p className="text-body-sm md:text-body-md xl:text-body-lg text-center md:text-left text-neutral-500 mb-5 md:mb-6 xl:mb-8">
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
                aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per.
              </p>
              <button className="text-body-lg font-medium text-white bg-primary-500 hover:bg-primary-400 rounded-[4px] py-2 px-6 xl:py-3 xl:px-[30.5px]">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* What people says */}
      <section className="bg-primary-50">
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
      {/* Read Our Recent Blogs */}
      <section>
        <div className="container-cs px-4 pt-[56px] pb-[64px] md:pt-[64px] md:px-0 xl:py-[120px]">
          <h2 className="text-desktop-h5 md:text-desktop-h4 xl:text-desktop-h1 text-neutral-900 text-center mb-3 md:mb-4 xl:mn-5">
            Read our recent Blogs
          </h2>
          <p className="text-body-sm text-neutral-600 mb-6 text-center md:text-body-md md:mb-8 xl:text-body-xl xl:mb-[48px]">
            Gorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet
          </p>

          <div className="relative">
            <Carousel>
              <CarouselContent className="pb-[64px] md:pb-[72px] md:-ml-5 xl:pb-[96px] xl:-ml-[23.5px]">
                {blogs.map((blog, index) => (
                  <CarouselItem key={index} className="basis-auto md:basis-1/3 md:pl-5 xl:pl-[23.5px]">
                    <div className="overflow-hidden w-[319px] rounded-[5.36px] bg-white md:w-auto md:rounded-[4px] xl:rounded-[8px] hover:shadow-cs-2">
                      <div className="relative w-full h-[228px] md:h-[170px] xl:h-[294px]">
                        <Image src={blog.thumbnail} alt={blog.title} fill className="object-cover object-center" />
                      </div>
                      <div className="pt-3 px-3 pb-4 md:pt-2 md:px-2 md:pb-3 xl:pt-3 xl:px-3 xl:pb-5">
                        <p className="text-body-lg text-neutral-900 font-medium mb-2 md:text-body-md xl:text-body-xl xl:mb-3">
                          How to choose best plant for you that make your house better.
                        </p>
                        <div className="flex items-center gap-x-3">
                          <p className="text-body-sm text-neutral-600 xl:text-body-md">By {blog.author}</p>
                          <div className="h-[11px] md:h-2 xl:h-[14px] w-[1px] bg-neutral-400"></div>
                          <p className="text-body-sm text-neutral-600 xl:text-body-md">{blog.releaseDate}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div className="absolute flex w-full justify-center bottom-0">
              <button className="text-body-lg font-medium text-white-cs py-2 px-6 rounded-[4px] bg-primary-500 hover:bg-primary-400 xl:py-3 xl:px-[39px]">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Services */}
      <section className="pb-20 md:pb-[88px] xl:pb-[140px]">
        <div className="bg-primary-50">
          <div
            className={cn(
              "container-cs py-4 px-[35.5px] grid grid-cols-2 gap-x-8 gap-y-5",
              "md:flex md:justify-center md:gap-x-[24.33px] md:py-8 md:px-0 xl:py-[64px] xl:justify-between",
            )}
          >
            <div className="flex items-center gap-x-2 xl:gap-x-4">
              <Icons.Truck className="shrink-0 md:h-8 md:w-8 xl:h-[56px] xl:w-[56px]" />
              <div>
                <p className="text-body-sm md:text-body-lg xl:text-body-xl font-semibold text-neutral-900 mb-1 xl:mb-2">
                  Free Shipping
                </p>
                <p className="text-body-xs md:text-body-sm xl:text-body-lg text-neutral-600 whitespace-nowrap">
                  Free Shipping over $100
                </p>
              </div>
            </div>
            <div className="flex items-center gap-x-2 xl:gap-x-4">
              <Icons.Return className="shrink-0 md:h-8 md:w-8 xl:h-[56px] xl:w-[56px]" />
              <div>
                <p className="text-body-sm md:text-body-lg xl:text-body-xl font-semibold text-neutral-900 mb-1 xl:mb-2">
                  Easy Return
                </p>
                <p className="text-body-xs md:text-body-sm xl:text-body-lg text-neutral-600 whitespace-nowrap">
                  Money Back Guaranty
                </p>
              </div>
            </div>
            <div className="flex items-center gap-x-2 xl:gap-x-4">
              <Icons.SecurityPayment className="shrink-0 md:h-8 md:w-8 xl:h-[56px] xl:w-[56px]" />
              <div>
                <p className="text-body-sm md:text-body-lg xl:text-body-xl font-semibold text-neutral-900 mb-1 xl:mb-2">
                  Secure Payment
                </p>
                <p className="text-body-xs md:text-body-sm xl:text-body-lg text-neutral-600 whitespace-nowrap">
                  100% secure payment
                </p>
              </div>
            </div>
            <div className="flex items-center gap-x-2 xl:gap-x-4">
              <Icons.Contact className="shrink-0 md:h-8 md:w-8 xl:h-[56px] xl:w-[56px]" />
              <div>
                <p className="text-body-sm md:text-body-lg xl:text-body-xl font-semibold text-neutral-900 mb-1 xl:mb-2">
                  27/7 Support
                </p>
                <p className="text-body-xs md:text-body-sm xl:text-body-lg text-neutral-600 whitespace-nowrap">
                  Support 24 hours a day
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
