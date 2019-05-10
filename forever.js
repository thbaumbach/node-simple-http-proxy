const forever = require('forever-monitor');

const script = 'index.js';

const child = new (forever.Monitor)(script, {
    max: 9999,
    //silent: true,
    args: []
});

child.on('watch:restart', function(info) {
    console.error('Restaring script because ' + info.file + ' changed');
});

child.on('restart', function() {
    console.error('Forever restarting script for ' + child.times + ' time');
});

child.on('exit:code', function(code) {
    console.error('Forever detected script exited with code ' + code);
});

child.on('exit', function () {
    console.log(script + ' has exited');
});

child.on('start', function (proc, data) {
    console.log(script + ' started (' + data.pid + ')');
});

child.start();
