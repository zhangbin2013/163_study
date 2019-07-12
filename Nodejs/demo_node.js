/**
 *Created by zhangbin on 2019/7/11
 */
const http = require('http');
const server = http.createServer(function (req, res) {
    res.writeHead(200, {
        'content-type': 'text/plan'
    });
    res.end('hello nodejs');
});

server.listen(3000, function () {
    console.log('listening port 3000');
});
