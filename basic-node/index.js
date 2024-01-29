const http = require('http');
const moment = require('moment');
const members = require('./members');
const getUsers = require('./users');

const server = http.createServer(async (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    const url = req.url;

    if (url === '/about') {
        res.write(JSON.stringify({
            'status': 'success',
            'message': 'response success',
            'description': 'Exercise #03',
            date: moment().format('YYYY-MM-DDTHH:mm:ssZ'),
            data: JSON.stringify(members)
        }));
   
    } else if (url === '/users') {
        const usersData = await getUsers();
        res.write(JSON.stringify(usersData));
    } else if (url === '/') {
        res.write('This is the home page');
    }

    res.end();
});

const hostname = '127.0.0.1';
const port = 3000;
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
