async function server() {
    const Koa = require('koa');
    const route = new (require('koa-router'))();
    const body = require('koa-body');
    const cors = require('@koa/cors');
    const passport = require('koa-passport');
    const authorize = require('./authorize.js').authorize;
    const micropubAddToJsonfeed = require('./micropub-koa.js').micropubAddToJsonfeed;

    const app = new Koa();

    require('./authenticate.js');
    app.use(passport.initialize());
    app.use(passport.session());

    app.use(cors({ credentials: true }));
    app.use(body({ multipart: true }));

    route.post('/',
        passport.authenticate('basic', { session: false }),
        authorize('poster'),
        micropubAddToJsonfeed(process.env.JSON_FEED || 'feed.json')
    )
    app.use(route.routes());
    app.use(route.allowedMethods());

    app.listen(process.env.PORT || 9014);
}

server();