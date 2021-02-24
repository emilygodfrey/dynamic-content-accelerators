'use strict';

var gulp = require('gulp');
var exec = require('child_process').exec;

var config = require('./../.automation-credentials.json');

gulp.task('configure-dc-cli', function (cb) {
  console.log(config.amplience['dynamic-content']['client-id']);
  var configurechild = exec(
    'dc-cli configure --clientId=' +
      config.amplience['dynamic-content']['client-id'] +
      ' --clientSecret=' +
      config.amplience['dynamic-content']['client-secret'] +
      ' --hubId=' +
      config.amplience['dynamic-content']['dc-hub-id'],
    (error, stdout, stderr) => {
      if (error) {
        throw error;
      }
      console.log(stdout);
      cb();
    }
  );
});
gulp.task('import-dc-content-type-schemas', function (cb) {
  console.log('Importing Content Schemas');
  var importschemas = exec(
    'dc-cli content-type-schema import dist/content-type-schemas',
    (error, stdout) => {
      if (error) {
        console.log('ERROR IN SCHEMAS');
        throw error;
      }
      console.log('no error');
      console.log(stdout, error);
      cb();
    }
  );
});
gulp.task('import-dc-content-types', function (cb) {
  console.log('Importing Content Types');
  var importcontentypes = exec(
    'dc-cli content-type import dist/content-types --sync',
    (error, stdout, stderr) => {
      if (error) {
        throw error;
      }
      console.log('no error');
      console.log(stderr);
      console.log(stdout);
      cb();
    }
  );
});

gulp.task(
  'automate-dynamic-content',
  gulp.series(
    'configure-dc-cli',
    'import-dc-content-type-schemas',
    'import-dc-content-types'
  ),
  function (cb) {
    cb();
  }
);
