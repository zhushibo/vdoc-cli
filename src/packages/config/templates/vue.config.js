/*
 * @Description:
 * @Author: doctor
 * @Date: 2020-03-31 10:01:20
 * @LastEditTime: 2020-05-29 13:53:15
 * @LastEditors: doctor
 */

var webpack = require('webpack')
const path = require('path')

const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const dllConfig = require('./build/dll.config')

const dllPlugings = []
const htmlPulings = []
Object.keys(dllConfig.libs).forEach(item => {
  const manifest = `./src/tmp/${item}-manifest.json`
  const vendor = `./src/tmp/vendor/${item}.dll.js`

  dllPlugings.push(new webpack.DllReferencePlugin({
    context: path.join(__dirname, 'src/tmp'),
    manifest: require(manifest)
  }))

  htmlPulings.push(new AddAssetHtmlPlugin({
    filepath: require.resolve(vendor),
    includeSourcemap: false,
    hash: true
  }))
})
module.exports = {

  chainWebpack: config => {
    config.entry = {
      app: './src/main.js'
    }
    config.optimization.minimize(true)
    config.optimization.splitChunks({
      chunks: 'all',
      cacheGroups: {
        commons: {
          chunks: 'all',
          minChunks: 2,
          name: 'commons',
          maxInitialRequests: 5
        }
      }
    })
  },
  css: {
    /* 为预处理器 loader 传递自定义选项 */
    loaderOptions: {
      stylus: {
        import: '~@/assets/styles/theme.styl'
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://ua12kf.thinktown.com:8443',
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    plugins: [
      ...dllPlugings,
      ...htmlPulings
    ]
  }
}
