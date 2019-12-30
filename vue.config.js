const title = 'luckywa'
const port = '8088'
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '' : '',
    // assetsDir: '/static',
    //自定义端口号
    devServer: {
        port,
        proxy: 'http://localhost:8087/',
        //  {
        // '/api': {
        //     target: ,
        //     ws: true,
        //     changeOrigin: true
        // }
        // },
    },
    //自定义变量
    configureWebpack: {
        name: title
    }
}