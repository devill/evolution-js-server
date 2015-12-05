'use strict';

let gulp = require('gulp'),
    child = require('child_process');

let env = Object.assign({ PORT: 3000 }, process.env);
let config = { cwd: './', env: env };
let server;

gulp.task('setupServer', function(done) {
  if (server && server.kill) {
    server.kill();
  }
  server = child.spawn('node', ['index.js'], config);
  server.stdout.on('data', function(data) {
      console.log('' + data);
  });
  server.stderr.on('data', function(data) {
      console.log('' + data);
  });
  done();
});

gulp.task('default', function() {
  gulp.start('setupServer');
  gulp.watch('**/*', ['setupServer']);
});

