import type { ComponentProps, FC } from "react";

const Grid: FC<ComponentProps<"svg">> = (props) => {
  return (
    <svg
      width="240"
      height="132"
      viewBox="0 0 240 132"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1664_1353)">
        <rect
          width="240"
          height="132"
          className="fill-white dark:fill-zinc-950"
        />
        <mask
          id="mask0_1664_1353"
          maskUnits="userSpaceOnUse"
          x="-297"
          y="-232"
          width="537"
          height="497"
        >
          <rect
            x="115"
            width="33"
            height="33"
            fill="url(#paint0_linear_1664_1353)"
          />
          <rect
            x="179"
            y="99"
            width="33"
            height="33"
            transform="rotate(-90 179 99)"
            fill="url(#paint1_linear_1664_1353)"
          />
          <rect
            x="83"
            y="132"
            width="33"
            height="33"
            transform="rotate(-90 83 132)"
            fill="url(#paint2_linear_1664_1353)"
          />
          <line
            x1="19.5001"
            y1="-82"
            x2="19.5001"
            y2="132"
            className="stroke-zinc-100 dark:stroke-zinc-800/50"
          />
          <line
            x1="51.5001"
            y1="-82"
            x2="51.5001"
            y2="132"
            className="stroke-zinc-100 dark:stroke-zinc-800/50"
          />
          <line
            x1="83.5001"
            y1="-82"
            x2="83.5001"
            y2="132"
            className="stroke-zinc-100 dark:stroke-zinc-800/50"
          />
          <line
            x1="115.5"
            y1="-82"
            x2="115.5"
            y2="132"
            className="stroke-zinc-100 dark:stroke-zinc-800/50"
          />
          <line
            x1="147.5"
            y1="-82"
            x2="147.5"
            y2="132"
            className="stroke-zinc-100 dark:stroke-zinc-800/50"
          />
          <line
            x1="179.5"
            y1="-82"
            x2="179.5"
            y2="132"
            className="stroke-zinc-100 dark:stroke-zinc-800/50"
          />
          <line
            x1="211.5"
            y1="-82"
            x2="211.5"
            y2="132"
            className="stroke-zinc-100 dark:stroke-zinc-800/50"
          />
          <line
            x1="-297"
            y1="132"
            x2="240"
            y2="132"
            className="stroke-zinc-100 dark:stroke-zinc-800/50"
          />
          <line
            x1="-297"
            y1="99"
            x2="240"
            y2="99"
            className="stroke-zinc-100 dark:stroke-zinc-800/50"
          />
          <line
            x1="-297"
            y1="66"
            x2="240"
            y2="66"
            className="stroke-zinc-100 dark:stroke-zinc-800/50"
          />
          <line
            x1="-297"
            y1="33"
            x2="240"
            y2="33"
            className="stroke-zinc-100 dark:stroke-zinc-800/50"
          />
          <line
            x1="-297"
            x2="240"
            className="stroke-zinc-100 dark:stroke-zinc-800/50"
          />
        </mask>
        <g mask="url(#mask0_1664_1353)">
          <g filter="url(#filter0_f_1664_1353)">
            <circle cx="160" cy="160" r="99" className="fill-zinc-100" />
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_1664_1353"
          x="-3"
          y="-3"
          width="326"
          height="326"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="32"
            result="effect1_foregroundBlur_1664_1353"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1664_1353"
          x1="131.5"
          y1="0"
          x2="131.5"
          y2="33"
          gradientUnits="userSpaceOnUse"
        >
          <stop className="stop-color-zinc" />
          <stop offset="1" className="stop-color-white" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1664_1353"
          x1="195.5"
          y1="99"
          x2="195.5"
          y2="132"
          gradientUnits="userSpaceOnUse"
        >
          <stop className="stop-color-zinc" />
          <stop offset="1" className="stop-color-white" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1664_1353"
          x1="99.5"
          y1="132"
          x2="99.5"
          y2="165"
          gradientUnits="userSpaceOnUse"
        >
          <stop className="stop-color-zinc" />
          <stop offset="1" className="stop-color-white" />
        </linearGradient>
        <clipPath id="clip0_1664_1353">
          <rect width="240" height="132" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Grid;
