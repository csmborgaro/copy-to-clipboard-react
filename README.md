# copy-clipboard-js [![NPM Downloads][downloads-image]][downloads-url]

[downloads-image]: https://img.shields.io/npm/dm/copy-clipboard-react.svg
[downloads-url]: https://npmcharts.com/compare/copy-clipboard-react?minimal=true

Instantly copy any string to the clipboard in React.js with this super lightweight module.
This is direct fork of maifeeulasad's [copy-clipboard-js](github.com/maifeeulasad/react.js-copy-clipboard) so all credits go to them.

## Why Use This Package?

The difference between this and their `copy-clipboard-js` is that this package uses **`<textarea>`** element instead of an `<input>`.  
This ensures that when copying **multi-line text**, the original formatting including `\n` (newline characters) is preserved exactly as written.

This package is also especially useful if you need an alternative to:

- **MDN TypeScript lib.dom `.ts` clipboard APIs**
- **`navigator.clipboard.writeText`**

Both of these approaches require **secure connections (HTTPS)** and will not work on **unsecure connections (HTTP)**.  
`copy-clipboard-clipboard` avoids that limitation, making it reliable in environments where HTTPS is not available.

## This is Dependency-Free

- 0 dependencies
- Lightweight

## Installation

Run this command in your terminal:

```bash
npm i copy-clipboard-react
```

Or, directly add it to your `package.json`:

```json
"copy-clipboard-react": "^1.0.3"
```
(change the version number to whatever is available [here](https://www.npmjs.com/package/copy-clipboard-react?activeTab=versions))

## Example usage
#### React.js

parameters:
 * @param {string} text_to_copy - Text to be copied to clipboard
 * @param {boolean} [alert_or_not=false] - Whether to show an alert after copying

`copyText = function (text_to_copy, alert_or_not = false)`

```javascript
import * as ccr from "copy-clipboard-react";

// Copy text anywhere in your app
ccr.copyText("something to copy!");
```
