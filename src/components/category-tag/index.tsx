import { cn } from "@/lib/utils";
import React from "react";

interface CategoryTagProp extends React.HTMLProps<HTMLDivElement> {
  isActive?: boolean;
  title: string;
}

export default function CategoryTag({ title, className, isActive = false, ...props }: CategoryTagProp) {
  return (
    <div
      {...props}
      className={cn(
        "py-1 px-2 rounded-[4px] xl:px-3",
        "text-body-sm font-medium md:text-body-lg",
        isActive ? "text-white-cs bg-primary-500" : "text-neutral-900 bg-primary-50",
        className,
      )}
    >
      {title}
    </div>
  );
}
