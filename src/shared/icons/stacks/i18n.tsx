import type { ComponentProps, FC } from "react";

const I18n: FC<ComponentProps<"svg">> = (props) => (
  <svg
    {...props}
    clipRule="evenodd"
    fillRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit="1.414"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m12.839 14.958-2.447-2.418.029-.03a16.879 16.879 0 0 0 3.574-6.29h2.823V4.291h-6.744V2.365H8.147v1.927H1.402V6.22h10.762a15.193 15.193 0 0 1-3.054 5.155 15.076 15.076 0 0 1-2.226-3.228H4.958a16.923 16.923 0 0 0 2.87 4.393l-4.903 4.837 1.368 1.368 4.817-4.817 2.997 2.996.732-1.965m5.424-4.885h-1.927l-4.335 11.562h1.927l1.079-2.89h4.576l1.089 2.89h1.927l-4.336-11.562m-2.524 6.744 1.56-4.172 1.561 4.172z"
      fill="#7986cb"
      strokeWidth="96349"
    />
  </svg>
);
export default I18n;
