import type { ComponentProps, FC } from "react";

const Azure: FC<ComponentProps<"svg">> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.894 3.205h5.525L8.684 20.197a.881.881 0 0 1-.835.6h-4.3a.879.879 0 0 1-.833-1.161L8.06 3.804a.881.881 0 0 1 .835-.599Z"
      fill="#01579B"
    />
    <path
      d="M16.922 14.603h-8.76a.405.405 0 0 0-.277.702l5.629 5.253c.163.153.38.238.603.238h4.96l-2.155-6.193Z"
      fill="#1976D2"
    />
    <path
      d="M15.95 3.803a.879.879 0 0 0-.833-.597H8.96a.88.88 0 0 1 .834.597l5.343 15.832a.88.88 0 0 1-.834 1.161h6.157a.879.879 0 0 0 .834-1.16L15.95 3.804Z"
      fill="#29B6F6"
    />
  </svg>
);
export default Azure;
