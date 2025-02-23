import type { ComponentProps, FC } from "react";

const ArrowLineRight: FC<ComponentProps<"svg">> = (props) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 9.375C3.65482 9.375 3.375 9.65482 3.375 10C3.375 10.3452 3.65482 10.625 4 10.625V9.375ZM16.4419 10.4419C16.686 10.1979 16.686 9.80214 16.4419 9.55806L12.4645 5.58058C12.2204 5.3365 11.8247 5.3365 11.5806 5.58058C11.3365 5.82466 11.3365 6.22039 11.5806 6.46447L15.1161 10L11.5806 13.5355C11.3365 13.7796 11.3365 14.1753 11.5806 14.4194C11.8247 14.6635 12.2204 14.6635 12.4645 14.4194L16.4419 10.4419ZM4 10.625L16 10.625V9.375L4 9.375V10.625Z"
      fill="currentColor"
    />
  </svg>
);

export default ArrowLineRight;
