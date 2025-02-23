import { expect, it } from "@jest/globals";
import { render, renderHook } from "@testing-library/react";
import { useRef } from "react";

import AnimatedBeam from "./animated-beam";

describe("AnimatedBeam", () => {
  it("renders correctly", () => {
    const containerRef = renderHook(() => useRef<HTMLDivElement | null>(null))
        .result.current,
      fromRef = renderHook(() => useRef<HTMLDivElement | null>(null)).result
        .current,
      toRef = renderHook(() => useRef<HTMLDivElement | null>(null)).result
        .current;

    const ResizeObserverMock = jest.fn(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));

    window.ResizeObserver = ResizeObserverMock;

    const { asFragment } = render(
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={fromRef}
        toRef={toRef}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
