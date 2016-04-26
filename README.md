
# last-char [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Travis](https://img.shields.io/travis/IonicaBizau/last-char.svg)](https://travis-ci.org/IonicaBizau/last-char/) [![Version](https://img.shields.io/npm/v/last-char.svg)](https://www.npmjs.com/package/last-char) [![Downloads](https://img.shields.io/npm/dt/last-char.svg)](https://www.npmjs.com/package/last-char) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Get the last character in a provided string.

## :cloud: Installation

```sh
$ npm i --save last-char
```


## :clipboard: Example



```js
// Dependencies
var LastChar = require("last-char");

console.log(LastChar("foo"));
// => "o"

console.log(LastChar("bar"));
// => "r"
```

## :memo: Documentation


### `LastChar(input)`
Returns the last character of the provided string.

#### Params
- **String** `input`: The input string.

#### Return
- **String** The last character of the provided string.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`clp`](https://github.com/IonicaBizau/clp)—A tiny and fast command line arguments parser.
 - [`double-last`](https://github.com/IonicaBizau/double-last#readme)—Doubles the last letter.
 - [`is-percent`](https://github.com/IonicaBizau/is-percent#readme)—Check if a given value is in the percent format.
 - [`name-it`](https://github.com/IonicaBizau/name-it#readme)—Generate project names from given keywords.
 - [`unvowel-last`](https://github.com/IonicaBizau/unvowel-last#readme)—Removes the last letter from a string if it is a vowel.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
