# copy-clipboard-react [![NPM Downloads][downloads-image]][downloads-url]

[downloads-image]: https://img.shields.io/npm/dm/copy-clipboard-react.svg
[downloads-url]: https://npmcharts.com/compare/copy-clipboard-react?minimal=true

A super lightweight React.js utility to instantly copy any string to the clipboard.  
This package is a direct fork of maifeeulasad's [copy-clipboard-js](https://github.com/maifeeulasad/react.js-copy-clipboard), full credit goes to them.

---

## Why Use This Package?

Unlike `copy-clipboard-js`, this package uses a **`<textarea>`** element instead of an `<input>`.  
This ensures that when copying **multi-line text**, the original formatting (including `\n` newline characters) is preserved exactly.

It’s especially useful as an alternative to:

- **MDN TypeScript `lib.dom.ts` clipboard APIs**
- **`navigator.clipboard.writeText`**

Both of these approaches require **secure connections (HTTPS)** and will fail on **HTTP**.  
`copy-clipboard-react` avoids that limitation, making it reliable in environments where HTTPS is not available.

---

## Features

- Zero dependencies  
- Lightweight and fast  
- Works with multi-line text  
- No HTTPS requirement  

---

## Installation

Install via terminal:

```bash
npm install copy-clipboard-react
```

Or add it directly to your `package.json`:

```json
"copy-clipboard-react": "^2.1.4"
```

*(Check the latest version [here](https://www.npmjs.com/package/copy-clipboard-react?activeTab=versions))*

---

## Usage Example

### React.js

**Function signature:**

```ts
copyText(text_to_copy: string, alert_or_not?: boolean): void
```

- `text_to_copy` - The text you want to copy  
- `alert_or_not` *(optional, default = false)* - Show an alert after copying  

**Example:**

```javascript
import * as ccr from "copy-clipboard-react";

// Copy text anywhere in your app
ccr.copyText("something to copy!");

// With alert
ccr.copyText("copied with alert!", true);
```

---

## License

MIT
