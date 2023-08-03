const passport = require('passport');
const { ExtractJwt, Strategy } = require('passport-jwt');
const { user: UserModel } = require('../../db');

module.exports = new Strategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: `${process.env.JWT_SECRET}`
  }, async (payload, done) => {
    try {
      const findUser = await UserModel.findByPk(payload.id);
      if (!findUser) return done(null, false);
      return done(null, findUser);
    } catch (error) {
      return done(error);
    }
  }
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const findUser = await UserModel.findByPk(id);
  done(null, findUser);
});