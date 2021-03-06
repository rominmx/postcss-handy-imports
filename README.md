# postcss-handy-import
[![Build Status](https://travis-ci.org/rominmx/postcss-handy-imports.svg?branch=master)](https://travis-ci.org/rominmx/postcss-handy-imports)

1. Places imports at the top of a file.
2. Removes duplicates

## Example
```css
// input.css
@import 'util/variables';

.header {
	color: red;
}

@import 'layout/header', 
		"layout/footer", 
		«util/variables»;

.footer {
	color: green;
}

@import 'util/mixins' util/variables;
```

```css
// output.css
@import 'util/variables';

@import 'layout/header';

@import 'layout/footer';

@import 'util/mixins';

.header {
	color: red;
}

.footer {
	color: green;
}
```

## Installation
```ssh
$ npm install postcss-handy-imports
```

## Usage
```javascript
postcss([ require('postcss-handy-imports')(options) ])