/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var Promise = require('bluebird');
var request = require('request');
var glob = require('glob');
var fs = require('fs.extra');
var mkdirp = require('mkdirp');
var server = require('./server.js');

require('./convert.js')();
server.noconvert = true;

// Sadly, our setup fatals when doing multiple concurrent requests
// I don't have the time to dig into why, it's easier to just serialize
// requests.
var queue = Promise.resolve();

glob('src/**/*', {nodir: true}, function(er, files) {
  files.forEach(function(file) {
    var targetFile = file.replace(/^src/, 'dist');

    if (file.match(/\.js$/) && !file.match(/\/js\//)) {
      targetFile = targetFile.replace(/\.js$/, '.html');
      queue = queue.then(function() {
        return new Promise(function(resolve, reject) {
          request('http://localhost:8079/' + targetFile.replace(/^dist\//, ''), function(error, response, body) {
            if (error) {
              reject(error);
              return;
            }
            if (response.statusCode != 200) {
              reject(new Error('Status ' + response.statusCode + ':\n' + body));
              return;
            }
            mkdirp.sync(targetFile.replace(new RegExp('/[^/]*$'), ''));
            fs.writeFileSync(targetFile, body);
            resolve();
          });
        });
      });
    } else {
      queue = queue.then(function() {
        return new Promise(function(resolve, reject) {
          mkdirp.sync(targetFile.replace(new RegExp('/[^/]*$'), ''));
          fs.copy(file, targetFile, resolve);
        });
      });
    }
  });

  queue = queue.then(function() {
    console.log('It is live at: https://packingjs.github.io/');
  }).finally(function() {
    server.close();
  }).catch(function(e) {
    console.error(e);
    process.exit(1);
  });
});
