import React from "react";
import tree from "../../assets/images/Tree1.png";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Icons from "../icons";

interface ProductCardProps {
  tagType?: "new" | "discount";
  tagLabel?: string;
  thumbnail: string;
  name: string;
  originalPrice: number;
  discountPrice?: number;
}

export default function ProductCard({
  tagLabel,
  tagType,
  thumbnail,
  name,
  originalPrice,
  discountPrice,
}: ProductCardProps) {
  return (
    <div className="relative group overflow-hidden">
      <div className="hidden absolute top-3 xl:flex flex-col gap-y-3 transition-all duration-500 ease-in-out right-0 translate-x-full group-hover:translate-x-0 group-hover:right-[13px]">
        <button className="flex items-center justify-center bg-white-cs h-[48px] w-[48px] rounded-full shadow-cs-1">
          <Icons.ShoppingBag />
        </button>
        <button className="flex items-center justify-center bg-white-cs h-[48px] w-[48px] rounded-full shadow-cs-1">
          <Icons.Heart />
        </button>
        <button className="flex items-center justify-center bg-white-cs h-[48px] w-[48px] rounded-full shadow-cs-1">
          <Icons.Eye />
        </button>
      </div>
      {tagType && (
        <div
          className={cn(
            "absolute z-10 top-[7px] left-[7px] px-1 rounded-[4px] text-body-sm text-white-cs",
            "xl:text-body-md xl:font-medium xl:py-1 xl:px-2",
            {
              "bg-info-500": tagType === "new",
              "bg-error-500": tagType === "discount",
            },
          )}
        >
          {tagLabel}
        </div>
      )}
      <div className="h-[175px] xl:h-[302px] bg-white pb-[21px] pt-[39px] mb-3 xl:pt-[66.62px] xl:pb-[35.53px] xl:mb-4">
        <div className="relative w-full h-full">
          <Image src={thumbnail} alt={name} fill className="object-contain" />
        </div>
      </div>
      <div>
        <p className="text-center font-dm-serif-display text-[14px] leading-[22px] text-neutral-900 mb-1 xl:text-desktop-h6">
          {name}
        </p>
        <div className="flex items-center justify-center gap-x-[3px] px-4 xl:gap-x-[5px]">
          <span className="text-desktop-h5 text-neutral-900 xl:text-desktop-h4">
            ${discountPrice ? discountPrice : originalPrice}
          </span>
          {discountPrice ? (
            <span className="font-dm-serif-display text-[16px] leading-[22px] text-neutral-500 xl:text-[20px] xl:leading-[28px]">
              ${originalPrice}
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
}
