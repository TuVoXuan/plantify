import React, { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import Icons from "../icons";
import { cn } from "@/lib/utils";

interface CategoryCollapseProps {
  active?: boolean;
  title: string;
  itemList: string[];
  classNameTitle?: string;
  classNameItem?: string;
}

export default function CategoryCollapse({
  active,
  title,
  itemList,
  classNameTitle,
  classNameItem,
}: CategoryCollapseProps) {
  const [open, setOpen] = useState(active ? true : false);

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger
        className={cn(
          "relative w-full text-left text-body-lg text-neutral-600 bg-white-cs p-4 rounded-[4px] border",
          active ? "border-primary-500" : "border-neutral-100",
          classNameTitle,
        )}
      >
        {title}
        <Icons.ChevronUp className={cn("absolute right-3 top-4 transition-all duration-500", open && "rotate-180")} />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="bg-white-cs rounded-[4px] py-3 px-4 flex flex-col gap-y-3 mt-1">
          {itemList.map((item) => (
            <p key={item} className={cn("text-body-lg text-neutral-600", classNameItem)}>
              -{item}
            </p>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
