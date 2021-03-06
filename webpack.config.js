var path = require('path'),
    webpack = require('webpack'),
    ROOT_PATH = path.resolve(__dirname),
    APP_PATH = path.resolve(ROOT_PATH,'src'),
    BUILD_PATH = path.resolve(ROOT_PATH, './dist'),
    PAGE_PATH = path.resolve(APP_PATH, 'page'),
    htmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports={
    entry: {
        'index': './src/page/index/index.js',
        'loading': './src/page/loading/index.js',
        'laituiInt': './src/page/laituiInt/index.js',
        'about': './src/page/about/index.js',
        'dynamic': './src/page/dynamic/index.js',
        'completeCase': './src/page/completeCase/index.js',
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
            chunks: ['commonjs','index'],
            //要把script插入标签里
            inject: 'body'
        }),
        new htmlWebpackPlugin({
            title: '',
            template: path.resolve(PAGE_PATH, 'loading/html.js'),
            filename: 'loading.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: ['commonjs','index'],
            //要把script插入标签里
            inject: 'body'
        }),
        new htmlWebpackPlugin({
            title: '',
            template: path.resolve(PAGE_PATH, 'about/html.js'),
            filename: 'about.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: ['commonjs','about'],
            //要把script插入标签里
            inject: 'body'
        }),
        new htmlWebpackPlugin({
            title: '',
            template: path.resolve(PAGE_PATH, 'articleList/list_1.html'),
            filename: 'list_1.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: ['commonjs','list_1.html'],
            //要把script插入标签里
            inject: 'body'
        }),
        new htmlWebpackPlugin({
            title: '',
            template: path.resolve(PAGE_PATH, 'articleList/list_2.html'),
            filename: 'list_2.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: ['commonjs','list_2.html'],
            //要把script插入标签里
            inject: 'body'
        }),
        new htmlWebpackPlugin({
            title: '',
            template: path.resolve(PAGE_PATH, 'articleList/list_3.html'),
            filename: 'list_3.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: ['commonjs','list_3.html'],
            //要把script插入标签里
            inject: 'body'
        }),
        new htmlWebpackPlugin({
            title: '',
            template: path.resolve(PAGE_PATH, 'articleList/list_4.html'),
            filename: 'list_4.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: ['commonjs','list_4.html'],
            //要把script插入标签里
            inject: 'body'
        }),
        new htmlWebpackPlugin({
            title: '',
            template: path.resolve(PAGE_PATH, 'articleList/list_5.html'),
            filename: 'list_5.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: ['commonjs','list_5.html'],
            //要把script插入标签里
            inject: 'body'
        }),
        new htmlWebpackPlugin({
            title: '',
            template: path.resolve(PAGE_PATH, 'articleList/list_6.html'),
            filename: 'list_6.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: ['commonjs','list_6.html'],
            //要把script插入标签里
            inject: 'body'
        }),
        new htmlWebpackPlugin({
            title: '',
            template: path.resolve(PAGE_PATH, 'articleList/list_7.html'),
            filename: 'list_7.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: ['commonjs','list_7.html'],
            //要把script插入标签里
            inject: 'body'
        }),
        new htmlWebpackPlugin({
            title: '',
            template: path.resolve(PAGE_PATH, 'articleList/list_8.html'),
            filename: 'list_8.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: ['commonjs','list_8.html'],
            //要把script插入标签里
            inject: 'body'
        }),
        new htmlWebpackPlugin({
            title: '',
            template: path.resolve(PAGE_PATH, 'laituiInt/html.js'),
            filename: 'laituiInt.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: ['commonjs','laituiInt'],
            //要把script插入标签里
            inject: 'body'
        }),
        new htmlWebpackPlugin({
            title: '',
            template: path.resolve(PAGE_PATH, 'completeCase/html.js'),
            filename: 'completeCase.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: ['commonjs','completeCase'],
            //要把script插入标签里
            inject: 'body'
        }),
        new htmlWebpackPlugin({
            title: '',
            template: path.resolve(PAGE_PATH, 'dynamic/html.js'),
            filename: 'dynamic.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: ['commonjs','dynamic'],
            //要把script插入标签里
            inject: 'body'
        }),
        new ExtractTextPlugin("styles.css")
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
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use:[
                        {
                            loader:'css-loader',
                            options:{
                                minimize: true //css压缩
                            }
                        }

                    ]
                })
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
                // 图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
                // 如下配置，将小于8192byte的图片转成base64码
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192&name=../images/[name].[ext]?[hash]',
            }
        ]
    }
}