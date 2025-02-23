import { describe, expect, it } from "@jest/globals";

import { highlightCode } from "@/shared/packages";

// color themes
jest.mock("shiki", () => null);
jest.mock("rehype-pretty-code", () => null);
jest.mock("rehype-stringify", () => null);
jest.mock("rehype-autolink-headings", () => null);
jest.mock("remark-parse", () => null);
jest.mock("remark-rehype", () => null);

// unified
jest.mock("unified", () => ({
  __esModule: true,
  unified: jest.fn(() => ({
    use: jest.fn().mockReturnThis(),
    process: jest.fn().mockResolvedValue({ contents: "<highlighted-code>" }),
  })),
}));

describe("highlightCode", () => {
  it("should return an array of highlighted code snippets", async () => {
    const code = "const foo = () => {};";
    const highlightedCodeOutput = await highlightCode(code);

    expect(highlightedCodeOutput).toEqual([
      {
        __html: expect.any(String),
        theme: "light",
      },
      {
        __html: expect.any(String),
        theme: "dark",
      },
    ]);
  });
});
