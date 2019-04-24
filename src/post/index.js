async function server() {
    const Koa = require('koa');
    const route = new (require('koa-router'))();
    const body = require('koa-body');
    const cors = require('@koa/cors');
    const passport = require('koa-passport');
    const authorize = require('./authorize.js').authorize;

    const app = new Koa();

    require('./authenticate.js');
    app.use(passport.initialize());
    app.use(passport.session());

    app.use(cors({ credentials: true }));
    app.use(body());

    route.post('/posts',
        passport.authenticate('basic', { session: false }),
        authorize('poster')
    )
    app.use(route.routes());
    app.use(route.allowedMethods());

    app.listen(process.env.PORT || 9014);
}

server();