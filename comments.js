// create webserver
var http = require('http');
var fs = require('fs');
var qs = require('querystring');
var url = require('url');
var comments = [];
http.createServer(function (req, res) {
    // parse request
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    var path = url_parts.pathname;
    // handle POST
    if (req.method == 'POST') {
        var body = '';
        req.on('data', function (data) {
            body += data;
        });
        req.on('end', function () {
            var POST = qs.parse(body);
            comments.push(POST.comment);
            console.log(POST.comment);
            res.end('Your comment has been posted');
        });
    }
    // handle GET
    else if (req.method == 'GET') {
        if (path == '/get_comments') {
            res.end(JSON.stringify(comments));
        }
        else {
            fs.readFile('comments.html', function (err, data) {
                res.end(data);
            });
        }
    }
}).listen(8080);
console.log('Server running at http://