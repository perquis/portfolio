import { describe, expect, it } from "@jest/globals";
import { fireEvent, render, renderHook } from "@testing-library/react";

import useInput from "./use-input";

describe("use-input", () => {
  it("should update the input value", () => {
    const { result } = renderHook(() => useInput());
    const { getByTestId } = render(
      <input data-testid="input" onChange={result.current[1]} />,
    );

    fireEvent.change(getByTestId("input"), { target: { value: "Hello" } });

    expect(result.current[0]).toBe("Hello");
  });
});
