import type { ComponentProps, FC } from "react";

const Minecraft: FC<ComponentProps<"svg">> = (props) => (
  <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4.34 2.424h15.32a1.915 1.915 0 0 1 1.916 1.915v15.322a1.915 1.915 0 0 1-1.916 1.915H4.34a1.915 1.915 0 0 1-1.916-1.916V4.34A1.915 1.915 0 0 1 4.34 2.423m1.916 3.83v3.831h3.83V12H8.17v5.745h1.915V15.83h3.83v1.915h1.915V12h-1.915v-1.915h3.83v-3.83h-3.83v3.83h-3.83v-3.83z"
      fill="#4caf50"
      strokeWidth={0.95757}
    />
  </svg>
);
export default Minecraft;
