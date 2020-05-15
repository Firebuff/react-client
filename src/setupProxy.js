/* 2.然后创建 src/setupProxy.js 并写入一下转发规则 */
const proxy = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(proxy('/api', {
        target: 'http://localhost:3000',
        pathRewrite: {
            "^/api": "/"
        },
        changeOrigin: true
    }));
    
};
