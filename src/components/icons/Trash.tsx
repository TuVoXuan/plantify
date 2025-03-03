import * as React from "react";
import { SVGProps } from "react";
const Trash = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none" {...props}>
    <path
      stroke="#64748B"
      strokeLinecap="round"
      strokeWidth={1.353}
      d="m17.751 5.148-.558 9.023c-.142 2.305-.213 3.458-.791 4.287a3.6 3.6 0 0 1-1.08 1.015c-.863.525-2.018.525-4.328.525-2.312 0-3.469 0-4.332-.526a3.598 3.598 0 0 1-1.08-1.017c-.578-.83-.648-1.984-.787-4.293l-.544-9.014"
    />
    <path
      stroke="#64748B"
      strokeLinecap="round"
      strokeWidth={1.353}
      d="M2.897 5.15h16.2m-4.45 0-.614-1.267c-.408-.842-.612-1.263-.964-1.526a1.793 1.793 0 0 0-.247-.155C12.432 2 11.964 2 11.029 2c-.96 0-1.44 0-1.835.21a1.8 1.8 0 0 0-.251.162c-.356.273-.555.71-.953 1.582L7.445 5.15M8.75 15.048v-5.4M13.249 15.048v-5.4"
    />
  </svg>
);
export default Trash;
