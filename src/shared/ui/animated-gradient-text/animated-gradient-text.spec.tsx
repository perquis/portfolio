import { expect, it } from "@jest/globals";
import { render } from "@testing-library/react";

import AnimatedGradientText from "./animated-gradient-text";

describe("AnimatedGradientText", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <AnimatedGradientText>children</AnimatedGradientText>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
