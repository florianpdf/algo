const getCount = require('../exercises/2_vowel_count');

test('abracadabra', () => {
    expect(getCount("abracadabra")).toBe(5);
});

test('aeiouy', () => {
    expect(getCount("aeiouy")).toBe(6);
});

test('WildCodeSchool', () => {
    expect(getCount("WildCodeSchool")).toBe(5);
});

test('WILDCODESCHOOL', () => {
    expect(getCount("WILDCODESCHOOL")).toBe(5);
});

test('We are the best color, we are the BLUEGE', () => {
    expect(getCount("'We are the best color, we are the BLUEGE'")).toBe(14);
});
