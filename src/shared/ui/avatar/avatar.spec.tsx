import { expect, it } from "@jest/globals";
import { render } from "@testing-library/react";
import type { ComponentProps } from "react";

import type { Rounded, Size } from "@/interfaces/variants";

import Avatar from "./avatar";

jest.mock("next-intl/navigation", () => ({
  createSharedPathnamesNavigation: () => ({
    Link: "a",
  }),
}));

jest.mock("../../ui", () => ({
  Ratio: ({ children, ...props }: ComponentProps<"div">) => (
    <div {...props}>{children}</div>
  ),
}));

interface AvatarTestInput {
  rounded: Rounded;
  size: Size;
}

describe("Avatar", () => {
  it.each([
    { rounded: "default", size: "tiny" },
    { rounded: "default", size: "small" },
    { rounded: "default", size: "medium" },
    { rounded: "default", size: "large" },
    { rounded: "full", size: "tiny" },
    { rounded: "full", size: "small" },
    { rounded: "full", size: "medium" },
    { rounded: "full", size: "large" },
  ] as AvatarTestInput[])(
    "renders correctly with rounded $rounded and size $size",
    ({ rounded, size }) => {
      const { asFragment } = render(
        <Avatar
          src="http://example.com/static/avatar.png"
          alt="User Avatar"
          rounded={rounded}
          size={size}
        />,
      );

      expect(asFragment()).toMatchSnapshot();
    },
  );
});
