import { describe, it, expect } from "vitest";
import { shuffle } from "../helper.js";

describe("shuffle", () => {
  it("modifies the array in place (same reference)", () => {
    const arr = [1, 2, 3, 4, 5];
    const ref = arr;
    shuffle(arr);
    expect(arr).toBe(ref);
  });

  it("preserves array length", () => {
    const arr = [1, 2, 3, 4, 5];
    shuffle(arr);
    expect(arr).toHaveLength(5);
  });

  it("preserves all original elements", () => {
    const original = [1, 2, 3, 4, 5];
    const arr = [...original];
    shuffle(arr);
    expect(arr.slice().sort((a, b) => a - b)).toEqual(original);
  });

  it("handles single-element array without error", () => {
    const arr = [42];
    shuffle(arr);
    expect(arr).toEqual([42]);
  });

  it("handles empty array without error", () => {
    const arr = [];
    shuffle(arr);
    expect(arr).toEqual([]);
  });
});
