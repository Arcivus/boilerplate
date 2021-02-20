var {resolve} = require('path');

module.exports = {
  entryPath: resolve(__dirname, '../../entry'),
  rootPath: resolve(__dirname, "..", ".."),
  outputPath: resolve(__dirname, '../../../dist/')
};
