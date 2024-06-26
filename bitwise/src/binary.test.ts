import { binaryBase2, binaryBitwise } from ".";

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

describe("Testing binaryBitwise function", () => {
  it("should convert 27 to binary [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1]", () => {
    expect(binaryBitwise(27)).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1]);
  })
  it("should convert 3 to binary [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1]", () => {
    expect(binaryBitwise(3)).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1]);
  })
  it("should convert 12345678 to binary [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0]", () => {
    expect(binaryBitwise(12345678)).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0]);
  })
})