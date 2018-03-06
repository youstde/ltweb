var path = require('path'),
    webpack = require('webpack'),
    ROOT_PATH = path.resolve(__dirname),
    APP_PATH = path.resolve(ROOT_PATH,'src'),
    BUILD_PATH = path.resolve(ROOT_PATH, 'dist'),
    PAGE_PATH = path.resolve(APP_PATH, 'page'),
    htmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports={
    entry: {
        'index': './src/page/index/index.js',
        'case': './src/page/case/index.js',
        'about': './src/page/about/index.js',
        'dynamic': './src/page/dynamic/index.js',
        'interaction': './src/page/interaction/index.js',
        'vendors':['zepto']
    },
    output: {
        path: BUILD_PATH,
        //修改了build.js,用一个数组[name]来代替，他会根据enter的入口文件名称生成多个js文件
        filename: '[name].js',
        publicPath: './'
    },
    plugins:[
        //将打包的js文件压缩
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),

        //提取公共代码，默认会把所有入口节点的公共代码提取出来
        new webpack.optimize.CommonsChunkPlugin({
            name:"commonjs",
            filename:"common.js"
        }),
        new htmlWebpackPlugin({
            title: '',
            template: path.resolve(PAGE_PATH, 'index/html.js'),
            filename: 'index.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: ['commonjs','index','vendors'],
            //要把script插入标签里
            inject: 'body'
        }),
        new htmlWebpackPlugin({
            title: '',
            template: path.resolve(PAGE_PATH, 'about/html.js'),
            filename: 'about.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: ['commonjs','about','vendors'],
            //要把script插入标签里
            inject: 'body'
        }),
        new htmlWebpackPlugin({
            title: '',
            template: path.resolve(PAGE_PATH, 'case/html.js'),
            filename: 'case.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: ['commonjs','case','vendors'],
            //要把script插入标签里
            inject: 'body'
        }),
        new htmlWebpackPlugin({
            title: '',
            template: path.resolve(PAGE_PATH, 'dynamic/html.js'),
            filename: 'dynamic.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: ['commonjs','dynamic','vendors'],
            //要把script插入标签里
            inject: 'body'
        }),
        new htmlWebpackPlugin({
            title: '',
            template: path.resolve(PAGE_PATH, 'interaction/html.js'),
            filename: 'interaction.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: ['commonjs','interaction','vendors'],
            //要把script插入标签里
            inject: 'body'
        }),

        //将css从js中抽取出来
        new ExtractTextPlugin("styles.css")
    ],
    module: {
        loaders:[
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                //注意loaders的处理顺序是从右到左的，这里就是先运行css-loader然后是style-loade
                include: APP_PATH
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=5000'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: APP_PATH,
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.ejs$/,
                loader: 'ejs-loader?variable=data',
                include: APP_PATH
            }
        ]
    }
}