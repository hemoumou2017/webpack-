# webpack-
不使用vue-cli工具，手动搭建
1、初始化项目npm init , 安装webpack npm install webpack webpack-cli -D, 新建src文件夹 在建一个main.js文件，在package.js下加脚本命令 
  "serve": "webpack ./src/main.js --mode development"      运行命令 npm run serve
2、新建build文件夹，在建一个webpack.config.js  修改其配置（见代码内配置）   修改package.json 文件，将之前添加的 serve 修改为 
   "serve": "webpack ./src/main.js --config ./build/webpack.config.js"
3、配置功能   es6/7/8 转es5代码 ，ES6/7/8 Api 转es5 ， 引入polyfill，   配置 scss 转 css ，配置 postcss 实现自动添加css3前缀，
使用 html-webpack-plugin来创建html页面，配置 devServer 热更新功能 ， 配置 webpack 打包 图片、媒体、字体等文件

具体功能按项目需要配置
