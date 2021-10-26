const highAndLow = require('../exercises/4_high_and_low')

test("8 3 -5 42 -1 0 0 -9 4 7 4 -4", () => {
    expect(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")).toBe("42 -9");
});

// test("1 2 3 4", () => {
//     expect(highAndLow("1 2 3 4")).toBe("4 1");
// });

// test("1", () => {
//     expect(highAndLow("1")).toBe("1 1");
// });

// test("-1 -2 -3 6 1111111 -9871", () => {
//     expect(highAndLow("-1 -2 -3 6 1111111 -9871")).toBe("1111111 -9871");
// });
