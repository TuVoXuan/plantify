import * as React from "react";
import { SVGProps } from "react";
const ShoppingBag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    className={props.className} // Add className prop here
    style={{ stroke: props.className ? "currentColor" : "#475569" }}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeWidth={1.01}
      d="M3.874 17.018 2.67 9.838c-.182-1.085-.273-1.628.018-1.983.292-.356.827-.356 1.898-.356h14.83c1.07 0 1.606 0 1.897.356.291.355.2.898.018 1.984l-1.203 7.18c-.4 2.379-.599 3.569-1.413 4.274-.814.706-1.988.706-4.336.706H9.623c-2.348 0-3.522 0-4.337-.706-.814-.705-1.013-1.895-1.412-4.275Z"
    />
    <path stroke="currentColor" strokeWidth={1.01} d="M17.5 7.5a5.5 5.5 0 1 0-11 0" />
  </svg>
);
export default ShoppingBag;
