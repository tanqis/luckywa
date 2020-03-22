module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '' : '',
    // assetsDir: 'static',
    lintOnSave: true,
    runtimeCompiler: true,
    productionSourceMap: false,
    devServer: {
        port: process.env.VUE_APP_PROT,
        proxy: {
            '/': {
                target: 'http://localhost:8087/',
                changeOrigin: true,
                // pathRewrite: {
                //     '^/nApi': ''
                // }
            },
            '/ws': {
                target: 'ws://localhost:8087/ws',
                ws: true,
                // changeOrigin: true
            },
        }
    },
    //自定义变量
    configureWebpack: {
        name: process.env.VUE_APP_TITLE
    }
}