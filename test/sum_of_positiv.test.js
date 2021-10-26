const positiveSum = require('../exercises/1_sum_of_positiv');

test('[1,2,3,4,5]', () => {
    expect(positiveSum([1, -3, 2,3,4,5])).toBe(15);
});

//  test('[1,-2,3,4,5]', () => {
//      expect(positiveSum([1,-2,3,4,5])).toBe(13);
//  });

//  test('[-1,-2,-3,-4,-5]', () => {
//      expect(positiveSum([-1,-2,-3,-4,-5])).toBe(0);
//  });

//  test('[]', () => {
//      expect(positiveSum([])).toBe(0);
//  });
