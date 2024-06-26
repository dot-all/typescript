import { binaryBase2 } from ".";

describe("Testing binaryBase2 function", () => {
  it("should convert 10 to binary [1, 0, 1, 0]", () => {
    expect(binaryBase2(10)).toEqual([1, 0, 1, 0]);
  })
  it("should convert 200 to binary [1, 1, 0, 0, 1, 0, 0, 0]", () => {
    expect(binaryBase2(200)).toEqual([1, 1, 0, 0, 1, 0, 0, 0]);
  })
  it("should convert 1234321 to binary [1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1]", () => {
    expect(binaryBase2(1234321)).toEqual([1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1]);
  })
})