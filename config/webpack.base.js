let path=require('path');
let dir=process.cwd()
let baseConfig={//commonjs规范
    entry:{
        "bundle":dir+'/src/main'
    },
    output:{
        "path":dir+'/dist',
        "filename":"[name].js"
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                use:['babel-loader']
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.(eot|svg|ttf|woff|woff2)$/,
                use:['url-loader']
            },
            {
                test:/\.(gif|jpg|png|jpeg)$/,
                use:['url-loader']
            }
        ]
    },
    plugins:[],
    resolve:{
        extensions:['.js','.jsx']
    }
}
module.exports=baseConfig