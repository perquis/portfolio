import { describe, expect, it } from "@jest/globals";
import type { Dirent } from "fs";
import fs from "fs/promises";

import { loadSlugs } from "./load-slugs";

const dirents = ["example"] as unknown as Dirent[];

describe("fetch-resource-slugs", () => {
  it("should fetch resource slugs", async () => {
    jest.spyOn(fs, "readdir").mockResolvedValueOnce(Promise.resolve(dirents));

    const result = await loadSlugs({
      locale: "en",
      dataSourceType: "posts",
    });

    expect(result).toEqual([
      {
        slug: "example",
      },
    ]);
  });
});
