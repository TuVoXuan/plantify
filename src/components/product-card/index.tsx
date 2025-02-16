import React from "react";
import tree from "../../assets/images/Tree1.png";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  tagType?: "new" | "discount";
  tagLabel?: string;
}

export default function ProductCard({ tagLabel, tagType }: ProductCardProps) {
  return (
    <div className="relative">
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
      <div className="bg-white pb-[21px] pt-[39px] mb-3 xl:pt-[66.62px] xl:pb-[35.53px] xl:mb-4">
        <Image
          src={tree.src}
          height={tree.height}
          width={tree.width}
          alt="tree"
          className="mx-auto max-h-[115px] w-auto xl:max-h-[200px]"
        />
      </div>
      <div>
        <p className="text-center font-dm-serif-display text-[14px] leading-[22px] text-neutral-900 mb-1 xl:text-desktop-h6">
          Petlas MultiAction PT565
        </p>
        <div className="flex items-center justify-center gap-x-[3px] px-4 xl:gap-x-[5px]">
          <span className="text-desktop-h5 text-neutral-900 xl:text-desktop-h4">$20</span>
          <span className="font-dm-serif-display text-[16px] leading-[22px] text-neutral-500 xl:text-[20px] xl:leading-[28px]">
            $25
          </span>
        </div>
      </div>
    </div>
  );
}
