![rehype][logo]

# Getting Started

**rehype** transforms HTML.  It’s an ecosystem of [plug-ins][plugins].
If you get stuck, [issues][] and [Gitter][] are good places to get help.

## Table of Contents

*   [Introduction](#introduction)
*   [Programmatic usage](#programmatic-usage)

## Introduction

Out of the box, **rehype** doesn’t do much.  HTML is given, and
written:

```html
<p>Some <em>emphasis</em>, <strong>importance</strong>, and <code>code</code>.
```

Yields:

```html
<p>Some <em>emphasis</em>, <strong>importance</strong>, and <code>code</code>.</p>
```

But, much can be done, [through plug-ins][plugins].

## Programmatic usage

The programmatic interface of **rehype** is provided by
[**unified**][unified].  In fact, [`rehype`][api] is two plug-ins:
[`rehype-parse`][parse] and [`rehype-stringify`][stringify].

Install [`rehype`][api] with [npm][]:

```bash
npm install rehype
```

`index.js` contains:

```js
var rehype = require('rehype');
var report = require('vfile-reporter');

rehype().process('<h2>Hello world!', function (err, file) {
    file.filename = 'example';
    file.extension = 'html';
    console.log(file.toString());
    console.error(report(file));
});
```

`node index.js` yields:

```txt
<h2>Hello world!</h2>
example.html
     1-1:17  warning  Unclosed element `h2`       require-close-tag

⚠ 1 warning
```

<!-- Definitions -->

[logo]: https://cdn.rawgit.com/wooorm/rehype/master/logo.svg

[issues]: https://github.com/wooorm/rehype/issues

[gitter]: https://gitter.im/wooorm/rehype

[npm]: https://docs.npmjs.com/cli/install

[api]: https://github.com/wooorm/rehype/tree/master/packages/rehype

[plugins]: https://github.com/wooorm/rehype/tree/master/doc/plugins.md

[unified]: https://github.com/wooorm/unified

[parse]: https://github.com/wooorm/rehype/tree/master/packages/rehype-parse

[stringify]: https://github.com/wooorm/rehype/tree/master/packages/rehype-stringify
