import { solution } from "./roman-numerals";

describe("roman-numerals", () => {
  it("should test", () => {
    expect(() => {
      solution(0);
    }).toThrow();
    expect(() => {
      solution("III" as any);
    }).toThrow();
    expect(solution(1000)).toBe("M");
    expect(solution(4)).toBe("IV");
    expect(solution(1)).toBe("I");
    expect(solution(1990)).toBe("MCMXC");
    expect(solution(2008)).toBe("MMVIII");
    expect(solution(1444)).toBe("MCDXLIV");
  });
});
