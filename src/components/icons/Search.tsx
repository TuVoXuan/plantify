import * as React from "react";
import { SVGProps } from "react";
const Search = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path stroke="#64748B" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.5 17.5 22 22" />
    <path stroke="#64748B" strokeLinejoin="round" strokeWidth={1.5} d="M20 11a9 9 0 1 0-18 0 9 9 0 0 0 18 0Z" />
  </svg>
);
export default Search;
