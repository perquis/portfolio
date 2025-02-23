import { describe, expect, it } from "@jest/globals";
import { fireEvent, render, renderHook } from "@testing-library/react";

import useEventCallback from "./use-event-callback";

describe("use-event-callback", () => {
  it("should execute the callback when the event is triggered", () => {
    const callback = jest.fn();

    const { getByText } = render(<button>Click me</button>);
    renderHook(() => useEventCallback({ callback, eventName: "click" }));

    fireEvent.click(getByText("Click me"));

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("should not execute the callback when the event is not triggered", () => {
    const callback = jest.fn();

    const { getByText } = render(<button>Click me</button>);
    renderHook(() =>
      useEventCallback({ callback, eventName: "click", active: false }),
    );

    fireEvent.click(getByText("Click me"));

    expect(callback).toHaveBeenCalledTimes(0);
  });
});
