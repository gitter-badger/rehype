/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module rehype:regenerate-fixtures
 * @fileoverview Regenerate all fixtures.
 */

'use strict';

/* eslint-env node */
/* eslint-disable no-console */

/*
 * Dependencies.
 */

var fs = require('fs');
var path = require('path');
var bail = require('bail');
var rehype = require('../packages/rehype')();

/*
 * Methods.
 */

var join = path.join;

/*
 * Regenerate.
 */
var root = join(__dirname, '..', 'test', 'fixtures');

fs.readdir(join(root), function (err, files) {
    bail(err);

    files.forEach(function (name) {
        var base = join(root, name);

        if (name.charAt(0) === '.') {
            return;
        }

        fs.readFile(join(base, 'index.html'), 'utf8', function (err, doc) {
            var tree = rehype.parse(doc);
            var result = rehype.stringify(tree);

            bail(err);

            fs.writeFile(
                join(base, 'index.json'),
                JSON.stringify(tree, 0, 2) + '\n',
                bail
            );

            if (result !== doc) {
                fs.writeFile(
                    join(base, 'result.html'),
                    result,
                    bail
                );
            }
        });
    });
});
