![rehype][logo]

# Plugins

**rehype** plug-ins lie at the core of **rehype**’s vision.

## Table of Contents

*   [List of Plugins](#list-of-plugins)
*   [List of Utilities](#list-of-utilities)
*   [Using plugins](#using-plugins)
*   [Creating plugins](#creating-plugins)

## List of Plugins

There currently aren’t any plug-ins.  Soon, they’ll come.  Have a good
idea?  Let’s [chat on Gitter][gitter] and make it happn!

## List of Utilities

See [**hast**][hast-util] for a list of utilities for working with
the AST.  See [`unist`][unist-util] for other utilities which work with
**hast** nodes, too.

And finally, see [`wooorm/vfile`][vfile-util] for a list of utilities
for working with virtual files and

## Using plugins

To use a plug-in programmatically, invoke the [`use()`][unified-use]
function.

## Creating plugins

First, read up on the [concept of plug-ins][unified-plugins].
Then, I suggest taking one of existing [plug-ins][plugins], which looks
similar to what you’re about to do, and work from there.  If you get
stuck, [issues][] and [Gitter][] are good places to get help.

A good place for publishing plug-ins is [npm][npm-publish].

You should pick a name prefixed by `"rehype-"`, such as `rehype-lint`.

When publishing a plug-in, you should use the package manager’s keywords
functionality and include `"rehype"` in the list.

<!--Definitions:-->

[logo]: https://cdn.rawgit.com/wooorm/rehype/master/logo.svg

[plugins]: #list-of-plugins

[hast-util]: https://github.com/wooorm/hast#list-of-utilities

[unist-util]: https://github.com/wooorm/unist#unist-node-utilties

[vfile-util]: https://github.com/wooorm/vfile#related-tools

[unified-use]: https://github.com/wooorm/unified#processoruseplugin-options

[unified-plugins]: https://github.com/wooorm/unified#plugin

[npm-publish]: https://docs.npmjs.com/getting-started/publishing-npm-packages

[issues]: https://github.com/wooorm/rehype/issues

[gitter]: https://gitter.im/wooorm/rehype
