// import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

// export
module.exports = {
  // parcel index.html
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: './js/main.js',

  // 결과물(번들)을 반환하는 설정
  output: {
    //path: path.resolve(__dirname,'dist'),
    //filename: 'main.js',
    clean: true
  },


  module: {
    rules: [
      {
        test: /\.s?css$/, // .css로 끝나는것 s?: s가있을수도 없을수도
        use: [
          // 순서 중요함
          'style-loader',   // 4) html에 해석된 내용을 style 태그로 삽입하는 것
          'css-loader',     // 3) 자바스크립트에 css 를 해석할수 있게끔 하는것
          'postcss-loader', // 2) 공급업체 접두사
          'sass-loader'     // 1) 가장먼저 로드됨
        ]
      }
    ]
  },


  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin ({
      template: './index.html'
    }),
    new CopyPlugin ({
      patterns: [
        { from: 'static' }
      ]
    })
  ],

  devServer: {
    host: 'localhost'
  }
}