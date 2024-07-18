import type { ComponentProps, FC } from "react";

const Angular: FC<ComponentProps<"svg">> = (props) => (
  <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path
      d="m12 2.5 8.84 3.15-1.34 11.7L12 21.5l-7.5-4.15-1.34-11.7L12 2.5m0 2.1L6.47 17h2.06l1.11-2.78h4.7L15.45 17h2.05L12 4.6m1.62 7.9h-3.23L12 8.63z"
      fill="#e53935"
    />
  </svg>
);
export default Angular;
