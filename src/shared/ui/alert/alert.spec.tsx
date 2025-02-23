import { expect, it } from "@jest/globals";
import { render } from "@testing-library/react";

import Alert, { type AlertStatus } from "./alert";

jest.mock("../../ui", () => ({
  IconButton: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  Motion: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  Paragraph: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  Section: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

jest.mock("../../../data", () => ({
  statusActions: [
    { name: "info", Icon: () => <div>Info</div> },
    { name: "success", Icon: () => <div>Success</div> },
    { name: "warning", Icon: () => <div>Warning</div> },
    { name: "error", Icon: () => <div>Error</div> },
  ],
}));

describe("Alert", () => {
  it.each(["info", "success", "warning", "error"] as AlertStatus[])(
    "renders alert component with %s status correctly",
    (status) => {
      const { asFragment } = render(
        <Alert status={status} content="This is an alert message!" />,
      );
      expect(asFragment()).toMatchSnapshot();
    },
  );
});
