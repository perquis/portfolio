import type { ComponentProps, FC } from "react";

const Font: FC<ComponentProps<"svg">> = (props) => (
  <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.98 14.538 12 6.507l3.007 8.031M10.731 3.119 3.753 20.882h2.855l1.42-3.806h7.93l1.434 3.806h2.855L13.269 3.119z"
      fill="#f44336"
    />
  </svg>
);
export default Font;
