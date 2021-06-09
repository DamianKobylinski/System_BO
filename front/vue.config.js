const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, '../server/public'),
  devServer: {
    proxy: {
      '/': {
        target: 'http://localhost:2000',
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import "@/scss/_colors.scss";
            @import "@/scss/_fonts.scss";
            @import "@/scss/_mixins.scss";
            `,
      },
    },
  },
};
