# babel-plugin-transform-replace-extends-helper

Replace the \_extends inline helper.

## Example

**In**

```javascript
var _extends = ...

_extends(...)
```

**Out**

```javascript
_.extend(a, b);
```

## Installation

```sh
$ npm install babel-plugin-transform-replace-extends-helper
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["transform-replace-extends-helper"]
}
```

### Via CLI

```sh
$ babel --plugins transform-replace-extends-helper script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["transform-replace-extends-helper"]
});
```
