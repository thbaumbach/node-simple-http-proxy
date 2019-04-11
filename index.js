var Server = require('hiproxy').Server,
    HTTP_PORT = 9000,
    HTTPS_PORT = 9999,
    proxy = new Server(HTTP_PORT, HTTPS_PORT);

// events
proxy.on('request', (req, res) => {
    console.log(req.method, req.url);
});

// uncomment if you want to snoop response data:
// proxy.on('data', (data) => {
//  console.log('>', data.toString());
// });

proxy.start().then(servers => {
    console.log('HTTP  proxy server at: 127.0.0.1:' + HTTP_PORT);
    console.log('HTTPS proxy server at: 127.0.0.1:' + HTTPS_PORT);
});
