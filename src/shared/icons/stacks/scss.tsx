import type { ComponentProps, FC } from "react";

const Scss: FC<ComponentProps<"svg">> = (props) => (
  <svg {...props} viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M419.047 96.227C406.855 48.39 327.54 32.67 252.472 59.336c-44.68 15.876-93.029 40.785-127.81 73.31-41.349 38.675-47.943 72.329-45.216 86.396 9.583 49.621 77.585 82.068 105.535 106.125v.144c-8.246 4.051-68.565 34.585-82.684 65.8-14.893 32.932 2.372 56.556 13.804 59.742 35.424 9.858 71.765-7.866 91.312-37.01 18.852-28.12 17.279-64.422 9.085-82.488 11.3-2.976 24.476-4.313 41.218-2.36 47.248 5.52 56.517 35.017 54.747 47.367s-11.681 19.14-14.998 21.185-4.326 2.767-4.05 4.287c.406 2.216 1.94 2.137 4.758 1.652 3.894-.655 24.804-10.042 25.709-32.827 1.14-28.934-26.587-61.302-75.684-60.45-20.216.354-32.933 2.268-42.123 5.69a82.505 82.505 0 0 0-2.084-2.308c-30.35-32.382-86.46-55.285-84.088-98.823.866-15.824 6.372-57.5 107.817-108.053 83.104-41.414 149.638-30.009 161.135-4.759 16.427 36.079-35.554 103.137-121.857 112.812-32.88 3.684-50.199-9.06-54.499-13.805-4.536-4.995-5.204-5.218-6.909-4.287-2.753 1.534-1.01 5.939 0 8.574 2.583 6.712 13.15 18.603 31.176 24.516 15.863 5.204 54.459 8.062 101.157-9.99 52.282-20.255 93.12-76.523 81.124-123.549zM196.584 339.995c3.92 14.5 3.487 28.016-.564 40.247a65.289 65.289 0 0 1-3.225 7.97c-3.12 6.477-7.315 12.534-12.441 18.132-15.654 17.07-37.508 23.533-46.882 18.092-10.12-5.873-5.047-29.943 13.084-49.11 19.52-20.635 47.602-33.902 47.602-33.902l-.039-.08 2.465-1.35z"
      fill="#ec407a"
      stroke="#ec407a"
      stroke-width="16.287"
    />
  </svg>
);
export default Scss;
