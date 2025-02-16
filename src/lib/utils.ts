import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge, twMerge } from "tailwind-merge";

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        "text-desktop-lg",
        "text-desktop-md",
        "text-desktop-sm",
        "text-desktop-xs",
        "text-desktop-h1",
        "text-desktop-h2",
        "text-desktop-h3",
        "text-desktop-h4",
        "text-desktop-h5",
        "text-desktop-h6",
        "text-body-xl",
        "text-body-lg",
        "text-body-md",
        "text-body-sm",
        "text-body-xs",
      ],
      container: ["container-cs"],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}
