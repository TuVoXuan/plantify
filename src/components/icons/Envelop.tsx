import * as React from "react";
import { SVGProps } from "react";
const Envelop = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <rect width={20} height={16} x={2} y={4} stroke="#64748B" strokeWidth={1.5} rx={5} />
    <path
      stroke="#64748B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6 9 4.8 3.6a2 2 0 0 0 2.4 0L18 9"
    />
  </svg>
);
export default Envelop;
