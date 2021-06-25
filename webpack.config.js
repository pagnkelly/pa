var path = require('path');
var config = { 
  entry: './src/main.js', 
  output: {  
    path: path.resolve(__dirname + '/dist'),//打包生成文件地址  
    filename: '[name].build.js',//生成文件ming
    publicPath: '/dist/'//文件输出的公共路径
  },
  module: {
    rules: [
      { 
        test: /\.js$/,
        include: path.resolve(__dirname + '/src'),
        exclude: '/node_modules/',
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      { 
        test: /\.css$/, 
        use:['style-loader','css-loader'], 
        include: path.resolve(__dirname + '/src/'), 
        exclude: '/node_modules/'
      },
      { 
        test: /\.(jpg|png|gif|svg)$/, 
        use: 'url-loader', 
        include: path.resolve(__dirname + '/src/'), 
        exclude: '/node_modules/'
      }
    ]
  },
  resolve: {  
    alias: {   
    'vue$': 'vue/dist/vue.esm.js',   
    '@': path.resolve(__dirname, '/src')  
    } 
  }
}
module.exports = config;