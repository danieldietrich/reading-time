[![npm version](https://img.shields.io/npm/v/@danieldietrich/reading-time?logo=npm&style=flat-square)](https://www.npmjs.com/package/@danieldietrich/reading-time/)[![vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/@danieldietrich/reading-time?style=flat-square)](https://snyk.io/test/npm/@danieldietrich/reading-time)[![minzipped size](https://img.shields.io/bundlephobia/minzip/@danieldietrich/reading-time?style=flat-square)](https://bundlephobia.com/result?p=@danieldietrich/reading-time@latest)
&nbsp;
[![build](https://img.shields.io/travis/danieldietrich/reading-time?logo=github&style=flat-square)](https://travis-ci.org/danieldietrich/reading-time/)[![coverage](https://img.shields.io/codecov/c/github/danieldietrich/reading-time?style=flat-square)](https://codecov.io/gh/danieldietrich/reading-time/)
&nbsp;
![Platform](https://img.shields.io/badge/platform-Node%20v10%20+%20Browser%20%28ES6%2fES2015%29-decc47?logo=TypeScript&style=flat-square)
&nbsp;
[![Sponsor](https://img.shields.io/badge/GitHub-💖Sponsors-b5b7b9?logo=github&style=flat-square)](https://github.com/sponsors/danieldietrich)[![donate](https://img.shields.io/badge/Donate-PayPal-blue.svg?style=flat-square)](https://paypal.me/danieldietrich13)[![license](https://img.shields.io/github/license/danieldietrich/reading-time?style=flat-square)](https://opensource.org/licenses/MIT/)
&nbsp;
[![Follow](https://img.shields.io/twitter/follow/danieldietrich?label=Follow&style=social)](https://twitter.com/danieldietrich/)

# reading-time

Estimates the reading time of a document ('1 min read'), similar to DEV.to or Medium.com.

The reading time is calculated by dividing the number of words by a fixed rate, the words per minute. We assume that plain text or markdown are read at 200 words per minute.

It makes sense to change the words per minute option when the document type changes. In the case of html, this way the additional noise of html tags can be compensated without sacrificing the simple word count strategy.

Features:

* Can be applied to plain text, markdown, html etc.
* Estimations can be balanced by providing an average words per minute rate.
* Fast and memory-efficient, does not create intermediate objects other than the return value.
* Simplistic. No default text (like '1 min read'), only numbers.

Currently there is no stream support.

## Installation

```bash
npm i @danieldietrich/reading-time
```

## Usage

The module supports ES6 _import_ and CommonJS _require_ style.

```ts
import readingTime from '@danieldietrich/reading-time';

function example(text) {
    const { minutes, words } = readingTime(text);
    console.log(`${minutes} min read, ${words} words`);
}
```

## Options

| Option | Description |
| -- | -- |
| <tt>wordBound</tt> | Optional predicate that tests if a character is a word bound. Default: space <tt>' '<tt>, tab <tt>'\t'</tt>, carriage return <tt>'\r'</tt> and new line <tt>'\n'</tt> |
| <tt>wordsPerMinute</tt> | Optional words per minute which an average reader can read. Default: <tt>200</tt> |

---

Copyright &copy; 2020 by [Daniel Dietrich](cafebab3@gmail.com). Released under the [MIT](https://opensource.org/licenses/MIT/) license.