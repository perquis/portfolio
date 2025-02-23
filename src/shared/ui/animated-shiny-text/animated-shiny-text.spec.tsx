import { expect, it } from "@jest/globals";
import { render } from "@testing-library/react";

import AnimatedShinyText from "./animated-shiny-text";

describe("AnimatedShinyText", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <AnimatedShinyText>children</AnimatedShinyText>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
