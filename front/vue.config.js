const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, '../public'),
  devServer: {
    proxy: {
      '/': {
        target: 'https://hidden-waters-71562.herokuapp.com/',
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
