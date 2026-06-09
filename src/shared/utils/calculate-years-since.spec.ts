import { describe, expect, it } from "@jest/globals";

import { calculateYearsSince } from "@/shared/utils";

describe("calculateYearsSince", () => {
  afterEach(() => {
    jest.useRealTimers();
  });

  it("should return 3 years when mocked date is before anniversary", () => {
    jest.useFakeTimers().setSystemTime(new Date("2024-01-15"));
    expect(calculateYearsSince("10.09.2020 00:00")).toBe(3);
  });

  it("should return 4 years when mocked date is after anniversary", () => {
    // Oct 20 2024 is after Oct 9 anniversary, so full 4 years have passed
    jest.useFakeTimers().setSystemTime(new Date("2024-10-20"));
    expect(calculateYearsSince("10.09.2020 00:00")).toBe(4);
  });
});
