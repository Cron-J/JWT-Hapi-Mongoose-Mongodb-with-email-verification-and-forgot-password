// Load modules

var User      = require('./controller/user'),
    Static    = require('./static');

// API Server Endpoints
exports.endpoints = [

    { method: 'GET',  path: '/{somethingss*}', config: Static.get },
    { method: 'POST', path: '/user', config: User.create},
    { method: 'POST', path: '/login', config: User.login},
    { method: 'POST', path: '/forgotPassword', config: User.forgotPassword},
    { method: 'POST', path: '/verifyEmail', config: User.verifyEmail},
    { method: 'POST', path: '/resendVerificationEmail', config: User.resendVerificationEmail}
  
];