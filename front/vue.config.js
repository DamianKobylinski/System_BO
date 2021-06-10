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
        data: `
            @import "@/assets/scss/_colors.scss";
            @import "@/assets/scss/_fonts.scss";
            @import "@/assets/scss/_mixins.scss";
            `,
      },
    },
  },
};
