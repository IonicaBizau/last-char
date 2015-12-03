# last-char [![Support this project][donate-now]][paypal-donations]

Get the last character in a provided string.

## Installation

```sh
$ npm i --save last-char
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

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md