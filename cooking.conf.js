var cooking = require('cooking');

cooking.set({
  entry: {
    app: './src/main.js',
    vendor: ['vue']
  },
  dist: './dist',
  clear: true, // 每次打包都清理掉 dist 目录
  hash: true,
  sourceMap: true,
  template: './index.html',
  devServer: { port: 8888, publicPath: '/' },
  postcss: [
    require('postcss-salad')
  ],
  extractCSS: true, // 提取 CSS 文件
  chunk: [
    'vendor', // entry 里定义的入口文件，也就是会将 vue 单独打包
    'manifest' // 这个并没有在 entry 里声明的会将所有公用部分打包，也就是 webpack runtime
  ],
  publicPath: '/dist/', // 打包后的资源文件相对于 url 的路径
  extends: ['vue2'], // 安装 cooking-lint 并配置 '.eslintrc' 文件
  postcss: [
    require('postcss-salad')
  ]
});

module.exports = cooking.resolve();


