import type { ComponentProps, FC } from "react";

const Nuxt: FC<ComponentProps<"svg">> = (props) => (
  <svg
    {...props}
    clipRule="evenodd"
    fillRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit="2"
    viewBox="0 0 124 124"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g stroke-width=".879">
      <path
        d="M55.641 29.653c-3.034-5.217-10.62-5.217-13.655 0L8.917 86.513c-3.034 5.218.76 11.739 6.828 11.739H41.56c-2.594-2.267-3.554-6.187-1.592-9.55L65.014 45.77z"
        fill="#69f0ae"
      />
      <path
        d="M76.593 42.127c2.512-4.27 8.79-4.27 11.3 0l27.368 46.52c2.512 4.27-.627 9.605-5.65 9.605H54.877c-5.023 0-8.161-5.335-5.65-9.604z"
        fill="#00e676"
        fillRule="nonzero"
      />
    </g>
  </svg>
);
export default Nuxt;
