#!/usr/bin/node
const fs = require('fs');

const sourceFile1 = process.argv[2];
const sourceFile2 = process.argv[3];
const destinationFile = process.argv[4];

const content1 = fs.readFileSync(sourceFile1, 'utf8').trim();
const content2 = fs.readFileSync(sourceFile2, 'utf8').trim();
const concatenatedContent = content1 + '\n' + content2 + '\n';

fs.writeFileSync(destinationFile, concatenatedContent);
