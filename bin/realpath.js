#!/usr/bin/env node
const fs = require('fs')
const files = Array.prototype.slice.call(process.argv, 2)

if (files.length < 1) {
	console.log(`Usage: fullpath file file1 ...`)
	process.exit(1)
}

for (const file of files) {
	const path = `${process.cwd()}/${file}`
	if (fs.existsSync(path)) {
		console.log(path)
	} else {
		console.log(`err: \`${file}\` not exists`);
	}
}
