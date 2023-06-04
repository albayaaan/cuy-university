const { log } = require("console");
const http = require("http");
const host = "127.0.0.1";
const port = "3002";

const server = http.createServer(function (request, response) {
    const content = `
    <head> 
        <title>My Server</title>
    </head>
    <body>
        <div style="width: 100vw; padding: 20px;">
            <h1 style="margin: 0 auto;">Welcome to my server</h1>
        </div>
    </body>
    `;

    response.statusCode = 200;
    response.end(content);
});

server.listen(port, host, "", function () {
    console.log(`Server menyala di ${host}:${port}`);
});
