import type { ComponentProps, FC } from "react";

const Powerpoint: FC<ComponentProps<"svg">> = (props) => (
  <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m7 1.5V9h5.5L13 3.5M8 11v2h1v6H8v1h4v-1h-1v-2h2a3 3 0 0 0 3-3 3 3 0 0 0-3-3H8m5 2a1 1 0 0 1 1 1 1 1 0 0 1-1 1h-2v-2h2z"
      fill="#d14524"
    />
  </svg>
);
export default Powerpoint;
