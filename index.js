const spawn = require('cross-spawn');

const argv = process.argv.slice(2);

spawn.sync('git', ['clone', 'https://github.com/enesusta/spring-boot-base', argv[0]], {
    stdio: 'inherit'
});

