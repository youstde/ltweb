var path = require('path'),
    webpack = require('webpack'),
    ROOT_PATH = path.resolve(__dirname),
    APP_PATH = path.resolve(ROOT_PATH,'src'),
    BUILD_PATH = path.resolve(ROOT_PATH, './dist'),
    PAGE_PATH = path.resolve(APP_PATH, 'page'),
    htmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry: {
        'index': './src/page/index/index.js',
        'laituiInt': './src/page/laituiInt/index.js',
        'about': './src/page/about/index.js',
        'dynamic': './src/page/dynamic/index.js',
        'completeCase': './src/page/completeCase/index.js',
        'interaction': './src/page/interaction/index.js',
        'vendors':['zepto']
    },
    output: {
        path: BUILD_PATH,
        //修改了build.js,用一个数组[name]来代替，他会根据enter的入口文件名称生成多个js文件
        filename: '[name].js'
    },
    plugins:[
        //将打包的js文件压缩
        new webpack.optimize.CommonsChunkPlugin({
            name:"commonjs",
            filename:"common.js"
        }),

        new htmlWebpackPlugin({
            title: '',
            template: path.resolve(PAGE_PATH, 'index/html.js'),
            filename: 'index.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: ['commonjs','laituiInt','completeCase','index','vendors'],
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
            template: path.resolve(PAGE_PATH, 'articleList/list_1.html'),
            filename: 'list_1.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: ['commonjs','list_1.html','vendors'],
            //要把script插入标签里
            inject: 'body'
        }),
        new htmlWebpackPlugin({
            title: '',
            template: path.resolve(PAGE_PATH, 'articleList/list_2.html'),
            filename: 'list_2.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: ['commonjs','list_2.html','vendors'],
            //要把script插入标签里
            inject: 'body'
        }),
        new htmlWebpackPlugin({
            title: '',
            template: path.resolve(PAGE_PATH, 'articleList/list_3.html'),
            filename: 'list_3.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: ['commonjs','list_3.html','vendors'],
            //要把script插入标签里
            inject: 'body'
        }),
        new htmlWebpackPlugin({
            title: '',
            template: path.resolve(PAGE_PATH, 'articleList/list_4.html'),
            filename: 'list_4.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: ['commonjs','list_4.html','vendors'],
            //要把script插入标签里
            inject: 'body'
        }),
        new htmlWebpackPlugin({
            title: '',
            template: path.resolve(PAGE_PATH, 'articleList/list_5.html'),
            filename: 'list_5.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: ['commonjs','list_5.html','vendors'],
            //要把script插入标签里
            inject: 'body'
        }),
        new htmlWebpackPlugin({
            title: '',
            template: path.resolve(PAGE_PATH, 'articleList/list_6.html'),
            filename: 'list_6.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: ['commonjs','list_6.html','vendors'],
            //要把script插入标签里
            inject: 'body'
        }),
        new htmlWebpackPlugin({
            title: '',
            template: path.resolve(PAGE_PATH, 'articleList/list_7.html'),
            filename: 'list_7.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: ['commonjs','list_7.html','vendors'],
            //要把script插入标签里
            inject: 'body'
        }),
        new htmlWebpackPlugin({
            title: '',
            template: path.resolve(PAGE_PATH, 'articleList/list_8.html'),
            filename: 'list_8.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: ['commonjs','list_8.html','vendors'],
            //要把script插入标签里
            inject: 'body'
        }),
        new htmlWebpackPlugin({
            title: '',
            template: path.resolve(PAGE_PATH, 'laituiInt/html.js'),
            filename: 'laituiInt.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: ['commonjs','laituiInt','vendors'],
            //要把script插入标签里
            inject: 'body'
        }),
        new htmlWebpackPlugin({
            title: '',
            template: path.resolve(PAGE_PATH, 'completeCase/html.js'),
            filename: 'completeCase.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: ['commonjs','completeCase','vendors'],
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
        })
    ],
    devServer: {
        proxy: {
            '/api': {
                target: 'http://crmpre.adbaitai.com',
                changeOrigin: true
            }
        },
        disableHostCheck: true,
        host: '127.0.0.1',
        //支持热加载刷新
        inline: true
    },
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
            },
            {
                test: /\.scss$/,
                loader:'style!css!sass'
            },
            {
                // 图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
                // 如下配置，将小于8192byte的图片转成base64码
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192&name=../images/[name].[ext]?[hash]',
            }
        ]
    }
}