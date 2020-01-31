/**
 * Estimates the reading time and counts the words of a document.
 *
 * @param text a document
 * @param options optional options to adjust the reading time estimation
 * @returns the word count and the estimated reading time in minutes
 */
function readingTime(text: string, options?: readingTime.Options): readingTime.Stats {

    const wordBound = options?.wordBound || (c => c === ' ' || c === '\n' || c === '\r' || c === '\t');
    const wordsPerMinute = options?.wordsPerMinute ?? 200;
    let words = 0;

    for (let i = text.length - 1; i >= 0;) {
        while (i >= 0 && wordBound(text[i])) { i--; }
        if (i >= 0) {
            words++;
            while (i >= 0 && !wordBound(text[i])) { i--; }
        }
    }

    return {
        minutes: Math.ceil(words / wordsPerMinute),
        words
    };
}

namespace readingTime {

    export type Options = {
        wordBound?: (char: string) => boolean
        wordsPerMinute?: number,
    };

    export type Stats = {
        minutes: number,
        words: number
    };
}

export = readingTime;
