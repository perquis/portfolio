import type { ComponentProps, FC } from "react";

const Vue: FC<ComponentProps<"svg">> = (props) => (
  <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1.791 3.691 12 21.311 22.209 3.776V3.69H18.24l-6.18 10.616L5.906 3.691z"
      fill="#41b883"
      transform="translate(0 .16)"
    />
    <path
      d="m5.907 3.691 6.152 10.617L18.24 3.691h-3.723L12.084 7.87 9.66 3.69z"
      fill="#35495e"
      transform="translate(0 .16)"
    />
  </svg>
);
export default Vue;