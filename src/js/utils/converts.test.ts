import {cleanTestId, getRomanNumber} from "@/js/utils/converts";

describe('converts', () => {
  it('should convert to roman number', () => {
    expect(getRomanNumber(10))
        .toBe("X");
  });

  it('should reformat id strings', () => {
    expect(cleanTestId("something with space,and.others"))
        .toBe("something-with-space-and-others");
  });
});
