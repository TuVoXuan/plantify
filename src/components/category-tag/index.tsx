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
      className={cn("py-1 px-2 rounded-[4px] xl:px-3", isActive ? "bg-primary-500" : "bg-primary-50", className)}
    >
      <span className={cn("text-body-sm font-medium md:text-body-lg", isActive ? "text-white-cs" : "text-neutral-900")}>
        {title}
      </span>
    </div>
  );
}
