'use strict';

const async = require('async'),
      shell = require('shelljs');

const env = require('../helpers/env'),
      waitForHost = require('../helpers/waitForHost');

const pre = function (done) {
  async.series({
    runRabbitMq (callback) {
      shell.exec('docker run -d -p 5674:5672 --name rabbitmq-integration rabbitmq:3.6.6-alpine', callback);
    },
    runPostgres (callback) {
      shell.exec('docker run -d -p 5434:5432 -e POSTGRES_USER=wolkenkit -e POSTGRES_PASSWORD=wolkenkit -e POSTGRES_DB=wolkenkit --name postgres-integration postgres:9.6.2-alpine', callback);
    },
    waitForRabbitMq (callback) {
      waitForHost(env.RABBITMQ_URL_INTEGRATION, callback);
    },
    waitForPostgres (callback) {
      waitForHost(env.POSTGRES_URL_INTEGRATION, callback);
    }
  }, done);
};

module.exports = pre;
