import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";

import Button, {
  type ButtonMode,
  type ButtonVariant,
  type ExcludedTinySize,
} from "./button";

interface ButtonTestInput {
  size: ExcludedTinySize;
  mode: ButtonMode;
  variants: ButtonVariant;
}

describe("Button", () => {
  it.each([
    {
      variants: "black",
      mode: "simple",
      size: "small",
    },
    {
      variants: "black",
      mode: "simple",
      size: "medium",
    },
    {
      variants: "black",
      mode: "simple",
      size: "large",
    },
    {
      variants: "black",
      mode: "gradient",
      size: "small",
    },
    {
      variants: "black",
      mode: "gradient",
      size: "medium",
    },
    {
      variants: "black",
      mode: "gradient",
      size: "large",
    },
    {
      variants: "white",
      mode: "simple",
      size: "small",
    },
    {
      variants: "white",
      mode: "simple",
      size: "medium",
    },
    {
      variants: "white",
      mode: "simple",
      size: "large",
    },
    {
      variants: "white",
      mode: "gradient",
      size: "small",
    },
    {
      variants: "white",
      mode: "gradient",
      size: "medium",
    },
    {
      variants: "white",
      mode: "gradient",
      size: "large",
    },
    {
      variants: "indigo",
      mode: "simple",
      size: "small",
    },
    {
      variants: "indigo",
      mode: "simple",
      size: "medium",
    },
    {
      variants: "indigo",
      mode: "simple",
      size: "large",
    },
    {
      variants: "indigo",
      mode: "gradient",
      size: "small",
    },
    {
      variants: "indigo",
      mode: "gradient",
      size: "medium",
    },
    {
      variants: "indigo",
      mode: "gradient",
      size: "large",
    },
  ] as ButtonTestInput[])(
    "renders button with $size size, $variants variants, and $mode mode",
    ({ mode, size, variants }) => {
      const { asFragment } = render(
        <Button size={size} variants={variants} mode={mode}>
          Button
        </Button>,
      );

      expect(asFragment()).toMatchSnapshot();
    },
  );
});
