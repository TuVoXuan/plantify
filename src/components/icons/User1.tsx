import * as React from "react";
import { SVGProps } from "react";
const User1 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <mask
      id="a"
      width={16}
      height={8}
      x={4}
      y={14}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path fill="#fff" fillRule="evenodd" d="M4 14.496h15.84v7.374H4v-7.374Z" clipRule="evenodd" />
    </mask>
    <g mask="url(#a)">
      <path
        fill="#64748B"
        fillRule="evenodd"
        d="M11.921 15.996c-4.261 0-6.421.732-6.421 2.177 0 1.458 2.16 2.197 6.421 2.197 4.26 0 6.419-.732 6.419-2.177 0-1.458-2.159-2.197-6.419-2.197Zm0 5.874c-1.959 0-7.921 0-7.921-3.697 0-3.296 4.521-3.677 7.921-3.677 1.959 0 7.919 0 7.919 3.697 0 3.296-4.52 3.677-7.919 3.677Z"
        clipRule="evenodd"
      />
    </g>
    <mask
      id="b"
      width={12}
      height={11}
      x={6}
      y={2}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path fill="#fff" fillRule="evenodd" d="M6.61 2h10.62v10.619H6.61V2Z" clipRule="evenodd" />
    </mask>
    <g mask="url(#b)">
      <path
        fill="#64748B"
        fillRule="evenodd"
        d="M11.921 3.428A3.887 3.887 0 0 0 8.038 7.31a3.873 3.873 0 0 0 3.854 3.882l.03.714v-.714a3.886 3.886 0 0 0 3.88-3.882 3.886 3.886 0 0 0-3.88-3.882Zm0 9.191h-.032A5.3 5.3 0 0 1 6.61 7.307 5.316 5.316 0 0 1 11.921 2a5.315 5.315 0 0 1 5.31 5.31 5.314 5.314 0 0 1-5.31 5.309Z"
        clipRule="evenodd"
      />
    </g>
  </svg>
);
export default User1;
