import { describe, expect, it } from "@jest/globals";
import { renderHook } from "@testing-library/react";

import usePlatform from "../use-platform/use-platform";
import useIsMobile from "./use-is-mobile";

jest.mock("../use-platform/use-platform", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("use-is-mobile", () => {
  it("should return true when the platform is on iOS or Android", () => {
    (usePlatform as jest.Mock).mockImplementation(() => ({ platform: "iOS" }));
    const { result } = renderHook(() => useIsMobile());

    expect(result.current.isMobile).toBe(true);
  });

  it("should return false when the platform is not on iOS or Android", () => {
    (usePlatform as jest.Mock).mockImplementation(() => ({
      platform: "Windows",
    }));
    const { result } = renderHook(() => useIsMobile());

    expect(result.current.isMobile).toBe(false);
  });
});
