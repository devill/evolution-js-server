'use strict';

let port = process.env.PORT || 3000;

let koa = require('koa');
let app = koa();

app.use(function *(){
  this.body = 'Hello World';
});

app.listen(port);

