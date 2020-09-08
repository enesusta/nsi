#! /usr/bin/env node
const spawn = require('cross-spawn');
const rimraf = require('rimraf');
const argv = process.argv.slice(2);

spawn.sync('git', ['clone', 'https://github.com/enesusta/spring-boot-base', argv[0]], {
    stdio: 'inherit'
});

rimraf.sync(`${argv[0]}/.git`);

console.log('Process has completed.');