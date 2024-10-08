import type { ComponentProps, FC } from "react";

const Supabase: FC<ComponentProps<"svg">> = (props) => (
  <svg {...props} fill="none" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path
      d="m13.653 21.504c-0.48617 0.60771-1.4716 0.27394-1.4828-0.50113l-0.17016-5.7303-0.03553-5.6097h7.718c1.3912 0 2.1681 1.595 1.3024 2.6767zm-3.2274-18.983c0.49084-0.65446 1.4866-0.29544 1.4978 0.53946l0.07572 12.212h-7.6665c-1.4043 0-2.1887-1.7175-1.3145-2.8824z"
      fill="#66bb6a"
      stroke-width=".93494"
    />
  </svg>
);
export default Supabase;
