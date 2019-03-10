'use strict';

const fs = require('fs');

const POST_INSTALL_HOOK = 'node_modules/.hooks/postinstall';

module.exports = {
  description: 'Sets up an NPM postinstall hook for generating Ember addons',
  normalizeEntityName() {/* no-op */},
  afterInstall() {
    return fs.chmodSync(POST_INSTALL_HOOK, 0o755);
  }
};
