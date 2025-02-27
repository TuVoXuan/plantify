"use client";
import CategoryCollapse from "@/components/category-collapse";
import Icons from "@/components/icons";
import ProductCard from "@/components/product-card";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { Trees } from "lucide-react";
import { useState } from "react";
import tree1 from "../../assets/images/Tree1.png";
import tree2 from "../../assets/images/Tree2.png";
import tree3 from "../../assets/images/Tree3.png";
import tree4 from "../../assets/images/Tree4.png";
import tree5 from "../../assets/images/Tree5.png";
import tree6 from "../../assets/images/Tree6.png";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { PaginationWithLinks } from "@/components/ui/pagination-with-link";

const trees = [
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

const categories = [
  {
    title: "Indoor Plants",
    items: ["Desk Plants", "Hanging Plants", "Air-Purifying Plants", "Money Trees", "Cacti"],
  },
  {
    title: "Outdoor Plants",
    items: ["Shade Trees", "Flowering Plants", "Bonsai Plants", "Climbing Plants", "Shrubs"],
  },
  {
    title: "Pots and Accessories",
    items: ["Plant Pots", "Planting Tools", "Fertilizers", "Potting Soil", "Irrigation Systems"],
  },
];

export default function Shop() {
  const [openCategoryDrawer, setOpenCategoryDrawer] = useState(false);

  return (
    <main className="bg-neutral-50">
      <section>
        <div className="container-cs px-4 pt-[104px] md:pt-20 md:px-0 xl:pt-[104px] xl:mb-6">
          <div className="flex w-full justify-between items-center mb-4">
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
                  <BreadcrumbPage className="text-primary-500 text-body-md xl:text-body-lg font-medium">
                    Shop
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <button
              onClick={() => setOpenCategoryDrawer(true)}
              className="flex items-center gap-x-[9px] text-body-md text-neutral-900 px-3 py-2 rounded-[4px] bg-white-cs border border-neutral-200 md:hidden"
            >
              Categories <Trees className="h-5 w-5 text-neutral-500 stroke-[1.5px]" />
            </button>

            <div className="flex items-center gap-x-[15px]">
              <span className="hidden md:block text-body-md text-neutral-600 xl:text-body-lg">Short by : </span>
              <Select>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Price" />
                </SelectTrigger>
                <SelectContent className="bg-white-cs">
                  <SelectItem value="light">Low - Hight</SelectItem>
                  <SelectItem value="dark">Hight - Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="container-cs pb-20 px-4 md:flex md:gap-x-5 md:px-0 xl:gap-x-7">
          <div className="hidden md:block w-[170px] xl:w-[298px]">
            <h3 className="text-desktop-h5 xl:text-desktop-h2 text-neutral-900 mb-2 xl:mb-3">Categories</h3>
            <div className="space-y-2 xl:space-y-3">
              {categories.map((cate, index) => (
                <CategoryCollapse
                  key={index}
                  active={index === 0}
                  title={cate.title}
                  itemList={cate.items}
                  classNameItem="md:text-body-md lg:text-body-lg"
                  classNameTitle="md:text-body-md md:font-medium lg:text-body-lg"
                />
              ))}
            </div>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-x-[11px] gap-y-3 md:grid-cols-3 md:gap-x-[19.5px] md:gap-y-4 xl:gap-6">
              {trees.map((tree, index) => (
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
            <div className="mt-8 xl:mt-12">
              <PaginationWithLinks
                page={10}
                pageSize={20}
                totalCount={500}
                classNameItemLink="h-8 w-8 xl:h-10 xl:w-10 rounded-none border-none data-[active=true]:bg-primary-500 data-[active=true]:text-white-cs aria-[disabled=true]:bg-neutral-200"
              />
            </div>
          </div>
        </div>
      </section>

      <Drawer open={openCategoryDrawer} onOpenChange={setOpenCategoryDrawer}>
        <DrawerContent className="bg-neutral-50 max-h-[70%]">
          <DrawerHeader className="text-left">
            <DrawerTitle className="text-center text-desktop-h4">Categories</DrawerTitle>
            <DrawerDescription className="text-center text-body-md">Choose category you want to see</DrawerDescription>
          </DrawerHeader>
          <div className="px-4 max-h-full overflow-y-auto space-y-2 mb-10">
            {categories.map((cate, index) => (
              <CategoryCollapse key={index} active={index === 0} title={cate.title} itemList={cate.items} />
            ))}
          </div>
        </DrawerContent>
      </Drawer>
    </main>
  );
}
