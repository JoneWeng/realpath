#!/usr/bin/env node

const path = require('path')
const fs = require('fs')
const files = Array.prototype.slice.call(process.argv, 2)

if (files.length < 1) {
	console.log(`Usage: fullpath file file1 ...`)
	process.exit(1)
}

for (const file of files) {
	if (path.isAbsolute(file)) {
		console.log(file)
	} else {
		printRealpathBaseOnCwd(file)
	}
}


function printRealpathBaseOnCwd(file) {
	const realpath = path.join(process.cwd(), file)
	if (fs.existsSync(realpath)) {
		console.log(realpath)
	} else {
		console.log(`err: \`${file}\` not exists`);
	}
}
