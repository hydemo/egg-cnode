'use strict';

// had enabled by egg
// exports.static = true;

exports.ejs = {
  enable: true,
  package: 'egg-view-ejs',
};

exports.redis = {
  enable: true,
  package: 'egg-redis',
};

exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};

exports.passport = {
  enable: true,
  package: 'egg-passport',
};

exports.passportGithub = {
  enable: true,
  package: 'egg-passport-github',
};

exports.passportLocal = {
  enable: true,
  package: 'egg-passport-local',
};