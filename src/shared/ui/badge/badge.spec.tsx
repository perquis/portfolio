import { expect, it } from "@jest/globals";
import { render } from "@testing-library/react";

import type { Color } from "@/interfaces/tailwindcss";
import type { Rounded } from "@/interfaces/variants";

import Badge from "./badge";

interface BadgeTestInput {
  color: Color;
  rounded: Rounded;
}

describe("Badge", () => {
  it.each([
    {
      color: "amber",
      rounded: "default",
    },
    {
      color: "blue",
      rounded: "default",
    },
    {
      color: "cyan",
      rounded: "default",
    },
    {
      color: "emerald",
      rounded: "default",
    },
    {
      color: "fuchsia",
      rounded: "default",
    },
    {
      color: "green",
      rounded: "default",
    },
    {
      color: "indigo",
      rounded: "default",
    },
    {
      color: "lime",
      rounded: "default",
    },
    {
      color: "neutral",
      rounded: "default",
    },
    {
      color: "orange",
      rounded: "default",
    },
    {
      color: "pink",
      rounded: "default",
    },
    {
      color: "purple",
      rounded: "default",
    },
    {
      color: "red",
      rounded: "default",
    },
    {
      color: "rose",
      rounded: "default",
    },
    {
      color: "slate",
      rounded: "default",
    },
    {
      color: "stone",
      rounded: "default",
    },
    {
      color: "teal",
      rounded: "default",
    },
    {
      color: "violet",
      rounded: "default",
    },
    {
      color: "yellow",
      rounded: "default",
    },
    {
      color: "zinc",
      rounded: "default",
    },
    {
      color: "amber",
      rounded: "full",
    },
    {
      color: "blue",
      rounded: "full",
    },
    {
      color: "cyan",
      rounded: "full",
    },
    {
      color: "emerald",
      rounded: "full",
    },
    {
      color: "fuchsia",
      rounded: "full",
    },
    {
      color: "green",
      rounded: "full",
    },
    {
      color: "indigo",
      rounded: "full",
    },
    {
      color: "lime",
      rounded: "full",
    },
    {
      color: "neutral",
      rounded: "full",
    },
    {
      color: "orange",
      rounded: "full",
    },
    {
      color: "pink",
      rounded: "full",
    },
    {
      color: "purple",
      rounded: "full",
    },
    {
      color: "red",
      rounded: "full",
    },
    {
      color: "rose",
      rounded: "full",
    },
    {
      color: "slate",
      rounded: "full",
    },
    {
      color: "stone",
      rounded: "full",
    },
    {
      color: "teal",
      rounded: "full",
    },
    {
      color: "violet",
      rounded: "full",
    },
    {
      color: "yellow",
      rounded: "full",
    },
    {
      color: "zinc",
      rounded: "full",
    },
  ] as BadgeTestInput[])(
    "renders correctly for color $color and rounded $rounded",
    ({ color, rounded }) => {
      const { asFragment } = render(<Badge color={color} rounded={rounded} />);
      expect(asFragment()).toMatchSnapshot();
    },
  );
});
