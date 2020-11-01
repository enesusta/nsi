#! /usr/bin/env node
const spawn = require('cross-spawn');
const rimraf = require('rimraf');
const argv = process.argv.slice(2);

const repoInitializer = (repoUrl, repoName) => {
    spawn.sync('git', ['clone', repoUrl, repoName], {
        stdio: 'inherit'
    });

    rimraf.sync(`${repoName}/.git`);
}

switch (argv[0]) {
    case 'spring':
        const springUrl = 'https://github.com/enesusta/spring-boot-base';
        repoInitializer(springUrl, argv[1]);
        break;
    case 'maven':
        const mavenUrl = 'https://github.com/enesusta/maven-basic-base';
        repoInitializer(mavenUrl, argv[1]);
        break;
}

console.log('Process has completed.');