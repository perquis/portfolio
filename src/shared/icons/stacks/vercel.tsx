import type { ComponentProps, FC } from "react";

const Vercel: FC<ComponentProps<"svg">> = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="m12 4 9.143 16H2.857z" clip-rule="evenodd" fill="#cfd8dc" fill-rule="evenodd" />
  </svg>
);
export default Vercel;
