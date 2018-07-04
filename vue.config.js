module.exports = {
  lintOnSave: false,
  configureWebpack: {
    devtool: 'source-map',
    mode: 'production',
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
      }
    },
  },
};
