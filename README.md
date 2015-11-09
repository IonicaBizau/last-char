# last-char [![Support this project][donate-now]][paypal-donations]

Get the last character in a provided string.

## Installation

```sh
$ npm i last-char
```

## Example

```js
// Dependencies
var LastChar = require("last-char");

console.log(LastChar("foo"));
// => "o"

console.log(LastChar("bar"));
// => "r"
```

## Documentation

### `LastChar(input)`
Returns the last character of the provided string.

#### Params
- **String** `input`: The input string.

#### Return
- **String** The last character of the provided string.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`double-last`](https://github.com/IonicaBizau/double-last#readme)

 - [`name-it`](https://github.com/IonicaBizau/name-it#readme)

 - [`unvowel-last`](https://github.com/IonicaBizau/unvowel-last#readme)

## License

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2015

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md