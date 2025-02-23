import { expect } from "@jest/globals";
import { render } from "@testing-library/react";

import Accordion from "./accordion";

jest.mock("../../hooks", () => ({
  useOpen: () => [false, [false, false, () => {}]],
}));

jest.mock("../../icons/generals", () => ({
  ArrowLeft: () => <div>ArrowLeft</div>,
}));

jest.mock("../../ui", () => ({
  Paragraph: ({ children }: { children: string }) => <div>{children}</div>,
}));

describe("Accordion", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <Accordion question="Question" answer="Answer" />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
