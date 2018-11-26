/* eslint-disable no-console */
import express from 'express';
import http from 'http';

const app = express();

const routes = [{
    url: '/dashboard',
    name: 'Dashboard',
    value: 'dashboard'
}];

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/routing', (req, res) => {

});

app.get('/routing', (req, res) => {
    res.send(JSON.stringify({ routing: routes }));
});

http.createServer(app).listen(8509, function (err) {
    if (err) {
        console.error(err);
    } else {
        console.log('server started!');
    }
});