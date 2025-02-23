import { describe, expect, it } from "@jest/globals";
import { renderHook } from "@testing-library/react";

import useScrollDirection from "./use-scroll-direction";

jest.mock("next-intl/server", () => ({
  __esModule: true,
  getRequestConfig: jest.fn(() => ({
    locale: "pl",
    messages: { key: "wartość" },
  })),
  getMessages: jest.fn(() => ({
    en: { key: "value" },
    pl: { key: "wartość" },
  })),
}));

jest.mock("next-intl/navigation", () => ({
  __esModule: true,
  createNavigation: jest.fn(() => ({
    Link: () => <div></div>,
    redirect: jest.fn(),
    usePathname: jest.fn(() => "/"),
    useRouter: jest.fn(() => ({ push: jest.fn() })),
  })),
  useIntl: jest.fn(() => ({
    locale: "pl",
    messages: { key: "wartość" },
  })),
}));

describe("use-scroll-direction", () => {
  it("should return up when window scroll x and y are set to 0 points", () => {
    const scrollYMock = jest.fn(() => 0);
    Object.defineProperty(window, "scrollTo", {
      value: jest.fn(),
      writable: true,
    });
    Object.defineProperty(window, "scrollY", {
      value: scrollYMock,
      writable: true,
    });

    const { result } = renderHook(() => useScrollDirection("y"));

    expect(result.current).toBe("up");
    expect(scrollYMock).not.toHaveBeenCalled();
  });
});
