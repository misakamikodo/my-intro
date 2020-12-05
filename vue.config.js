module.exports = {
    devServer: {
        port: 80,
    },
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "~@/assets/properties.scss";`
            },
            less: {
                globalVars: {
                    primary: '#fff'
                }
            }
        },
    },
};