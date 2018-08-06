const config = {
        server: {
            baseDir: './public'
        },
        tunnel: false,
        host: 'localhost',
        port: 9000,
        injectChanges: false,
        logPrefix: 'BrowserSync Log'
    },
    browserSync = require('browser-sync');

browserSync(config);
