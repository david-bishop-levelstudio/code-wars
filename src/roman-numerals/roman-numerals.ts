export function solution(number: number) {
  // Check validity
  if (isNaN(number)) throw new Error("Must be a number.");
  if (number < 1 || number > 3999) throw new Error("Must be between 1 and 3999");

  // Cheat a bit and include the subtractions
  const numerals: { [key: number]: string } = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };

  // Hit the number dead on, output it.
  if (number in numerals) return numerals[number];

  // Otherwise create a reverse list of the keys
  const values = Object.keys(numerals)
    .map(Number)
    .sort((a: number, b: number) => b - a);

  // iterate over the list
  let result = "";
  for (const value of values) {
    const romanValue = numerals[value];
    // while the number is bigger
    while (number >= value) {
      // concat roman value to result
      result += romanValue;
      // subtract arabic value from number
      number -= value;
    }
  }

  // Output concatenated roman values
  return result;
}
