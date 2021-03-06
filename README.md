<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [Introduction][1]
-   [scroll][2]
    -   [Parameters][3]
    -   [Examples][4]

## Introduction

Show information on console without using a lot of real estate screen by letting it scroll horizontally like those electronic stock ticker tape

### How to use it

Install the package

```console
$ npm i --save scroll-lines
```

Pass an array of strings  and the speed in miliseconds to the scroll function

```javascript
const { scroll } = require('scroll-lines')

const text = [
  'Lorem ipsum dolor sit amet...',
  'Idioms are a wonderful part of the English...'
]

scroll(text, 100)
```

The result will be shown on the console

![scroll-lines][5]


## scroll

Print multiple automatic horizontal scroll text to terminal

### Parameters

-   `textArr` **[string][6]** Each item is a line that will scroll repeatedly
-   `speed` **[number][7]** The speed in ms for the animation (optional, default `100`)

### Examples

```javascript
scroll(['a large text'], ['another large text'])
```

Returns **void** 

[1]: #introduction

[2]: #scroll

[3]: #parameters

[4]: #examples

[5]: https://github.com/edkedk99/scroll-lines/raw/master/scroll-lines.gif

[6]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[7]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number
