import readingTime from '.';

describe('Estimate reading time with default options', () => {

    test('Should recognize empty text', () => {
        expect(readingTime("")).toEqual({minutes: 0, words: 0});
    });

    test('Should recognize one word without whitespace', () => {
        expect(readingTime("Daniel")).toEqual({minutes: 1, words: 1});
    });

    test('Should recognize one word surrounded by whitespace', () => {
        expect(readingTime("  Daniel  ")).toEqual({minutes: 1, words: 1});
    });

    test('Should recognize a single character', () => {
        expect(readingTime("@")).toEqual({minutes: 1, words: 1});
    });

    test('Should recognize a single unicode character', () => {
        expect(readingTime("🐒")).toEqual({minutes: 1, words: 1});
    });

});

describe('Estimate reading time with custom options', () => {

    test('Should read two multiline words in 2 minutes', () => {
        expect(readingTime(`
            one
            two
        `, {
            wordsPerMinute: 1
        })).toEqual({minutes: 2, words: 2});
    });

    test('Should read four multiline words in 2 minutes', () => {
        expect(readingTime(`

            one

            two

            three

            four

        `, {
            wordsPerMinute: 2
        })).toEqual({minutes: 2, words: 4});
    });

    test('Should round time to floor', () => {
        expect(readingTime(`

            one

            two

            three

            four

        `, {
            wordsPerMinute: 3
        })).toEqual({minutes: 2, words: 4});
    });

    test('Should round time to ceil', () => {
        expect(readingTime(`

            one

            two

            three

        `, {
            wordsPerMinute: 2
        })).toEqual({minutes: 2, words: 3});
    });

});

describe('Deal with corner cases', () => {

    test('Should accept a function that classifies all characters as word boundary', () => {
        expect(readingTime(' ', {
            wordBound: () => true
        })).toEqual({minutes: 0, words: 0});
    });

    test('Should accept a function that classifies no characters as word boundary', () => {
        expect(readingTime(' ', {
            wordBound: () => false
        })).toEqual({minutes: 1, words: 1});
    });

    test('Should accept zero words per minute', () => {
        expect(readingTime('@', {
            wordsPerMinute: 0
        })).toEqual({minutes: Infinity, words: 1});
    });

    test('Should accept negative words per minute', () => {
        expect(readingTime('@', {
            wordsPerMinute: -1
        })).toEqual({minutes: -1, words: 1});
    });

    test('Should accept Infinity words per minute', () => {
        expect(readingTime('@', {
            wordsPerMinute: Infinity
        })).toEqual({minutes: 0, words: 1});
    });

    test('Should accept -Infinity words per minute', () => {
        expect(readingTime('@', {
            wordsPerMinute: -Infinity
        })).toEqual({minutes: -0, words: 1});
    });

    test('Should accept NaN words per minute', () => {
        expect(readingTime('@', {
            wordsPerMinute: NaN
        })).toEqual({minutes: NaN, words: 1});
    });

});