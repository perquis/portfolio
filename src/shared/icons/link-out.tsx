import type { ComponentProps, FC } from "react";

export const LinkOut: FC<ComponentProps<"svg">> = (props) => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M13.75 1.875H18.125V6.25M17.1875 2.8125L12.5 7.5M10.625 3.125H5C4.50272 3.125 4.02581 3.32254 3.67417 3.67417C3.32254 4.02581 3.125 4.50272 3.125 5V15C3.125 15.4973 3.32254 15.9742 3.67417 16.3258C4.02581 16.6775 4.50272 16.875 5 16.875H15C15.4973 16.875 15.9742 16.6775 16.3258 16.3258C16.6775 15.9742 16.875 15.4973 16.875 15V9.375"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
