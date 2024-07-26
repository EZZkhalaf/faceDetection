const path = require('path');

module.exports = {
  // Other configurations...

  resolve: {
    fallback: {
      "path": require.resolve("path-browserify"),
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "os": require.resolve("os-browserify/browser"),
      "querystring": require.resolve("querystring-es3"),
      "vm": require.resolve("vm-browserify"),
      "fs": false,  // fs is not used in the browser environment, hence false
    }
  }
};
