# @codewell/from-object-keys

## Installation

```
npm install @codewell/from-object-keys
```

## Basic Usage

```JavaScript
import fromObjectKeys from '@codewell/from-object-keys';

const myObject = {
  foo: 123,
  bar: 'hello world',
};

fromObjectKeys('bar', 'foo')(myObject);
// => ['hello world', 123]
```
