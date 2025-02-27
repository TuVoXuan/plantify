import * as React from "react";
import { SVGProps } from "react";
const Menu = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <path
      stroke="#475569"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.25}
      d="M3.334 4.165h10M3.334 9.999h13.333M3.334 15.832H10"
    />
  </svg>
);
export default Menu;
