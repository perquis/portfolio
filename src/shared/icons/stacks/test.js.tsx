import type { ComponentProps, FC } from "react";

const TestJS: FC<ComponentProps<"svg">> = (props) => (
  <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path
      className="fill-[#ffca28]"
      d="M5 19a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1c0-.21-.07-.41-.18-.57L13 8.35V4h-2v4.35L5.18 18.43c-.11.16-.18.36-.18.57m1 3a3 3 0 0 1-3-3c0-.6.18-1.16.5-1.63L9 7.81V6a1 1 0 0 1-1-1V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1v1.81l5.5 9.56c.32.47.5 1.03.5 1.63a3 3 0 0 1-3 3H6m7-6 1.34-1.34L16.27 18H7.73l2.66-4.61L13 16m-.5-4a.5.5 0 0 1 .5.5.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5z"
    />
  </svg>
);
export default TestJS;
