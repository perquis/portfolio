import type { ComponentProps, FC } from "react";

const Uml: FC<ComponentProps<"svg">> = (props) => (
  <svg {...props} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path
      transform="translate(-1.885 -2.474) scale(1.0709)"
      style="fill-rule:evenodd;fill:#b39ddb"
      d="M83 73.887 52.035 90 52 51.677 64.98 45v27.661l17.951-9.197z"
    />
    <path
      transform="translate(-6.276 -2.474) scale(1.0709)"
      style="fill-rule:evenodd;fill:#fbc02d"
      d="M41.992 85.982 50 90V51.561l-12.165-5.874-3.852 18.343-3.885-22.122L18 36v38.473l7.975 4.088V55.374l4.359 25.042 7.096 3.607 4.562-20.817z"
    />
    <path
      d="m45.237 6.093-9.775 8.755s19.072 9.931 21.39 11.105c2.317 1.173 5.615 3.43 2.05 6.771-3.565 3.34-7.487 2.89-10.16 1.535a21829.587 21829.587 0 0 1-22.458-11.466l-10.07 8.667S35.642 41.48 38.85 43.196c3.208 1.715 15.15 5.958 26.47-2.98 11.318-8.937 9.714-12.188 9.714-12.82 0-.631-.267-3.972-2.228-6.048-1.96-2.077-7.664-5.056-10.07-6.32-2.407-1.264-17.497-8.936-17.497-8.936z"
      style="fill-rule:evenodd;fill:#f06292;stroke-width:1.0709"
    />
  </svg>
);
export default Uml;
