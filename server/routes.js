// Load modules

var User      = require('./controller/user'),
    Static    = require('./static'),
    scraper      = require('./controller/WebScraper/scraper.js');

// API Server Endpoints
exports.endpoints = [

    { method: 'GET',  path: '/{somethingss*}', config: Static.get },
    { method: 'POST', path: '/user', config: User.create},
    { method: 'POST', path: '/verifyEmail', config: User.verifyEmail},
    { method: 'POST', path: '/GetData', config: scraper.getdata},
   
];