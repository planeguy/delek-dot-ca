exports.authorize = function (role) {
    return async function (ctx, next) {
        if (ctx.req.user.roles.indexOf(role) < 0) {
            ctx.status = 401;
        } else {
            await next();
        }
    }
}