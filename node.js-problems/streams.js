// combination of streams in node.js.
const fs = require('node:fs');
const zLib = require('node:zlib');

const readableStream = fs.createReadStream('./files/sample.txt', {encoding: 'utf-8'});
const transformStream = zLib.createGzip();
const writableStream = fs.createWriteStream('./files/sample.gz');

readableStream.pipe(transformStream).pipe(writableStream);