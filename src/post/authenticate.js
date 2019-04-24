
const passport = require('koa-passport');
const Basic = require('passport-http').BasicStrategy;
const bcrypt = require('bcryptjs');

const users = [
    { id: '1', username: 'pg', password: '', roles: ['bridge'] }
];

async function fetchUserByUsername(username) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].username == username) return users[i];
    }
}

async function fetchUser(id) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == id) return users[i];
    }
}

passport.serializeUser((user, done) => {
    done, null(user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        done(null, await fetchUser(id));
    } catch (err) {
        done(err);
    }
});

passport.use(new Basic(async (username, password, done) => {
    try {
        let user = await fetchUserByUsername(username);
        if (user) {
            let pwd = await bcrypt.compare(password, user.password);
            if (pwd) done(null, user)
            else done(null, false);
        } else done(null, false);
    } catch (e) {
        done(e);
    }
}));