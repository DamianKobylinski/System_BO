const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, '../server/public'),
  devServer: {
    proxy: {
      '/': {
        target: 'https://www.botakmam.pl',
      },
    },
    historyApiFallback: true,
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import "@/assets/scss/_colors.scss";
            @import "@/assets/scss/_fonts.scss";
            @import "@/assets/scss/_mixins.scss";
            `,
      },
    },
  },
};
