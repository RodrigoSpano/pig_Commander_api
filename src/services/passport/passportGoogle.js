const passport = require('passport');
const { Strategy } = require('passport-google-oauth20');
const { user: UserModel } = require('../../db');
const { hashPassword } = require('../../utils/helpers/authHelpers');
const { sendWelcomeMail } = require('../../utils/helpers/sendMailHelper');

module.exports = new Strategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${process.env.GOOGLE_CALLBACK}`,
    scope: ['email', 'profile'],
  }, async (accessToken, refreshToken, profile, done) => {
    const findUser = await UserModel.findOne({ where: { email: profile['_json'].email } });
    if (findUser) {
      if (!findUser.googleId) {
        await findUser.update({ googleId: profile.id });
        return done(null, findUser);
      }
      return done(null, findUser);
    }
    const hashedPass = hashPassword(profile.id);
    const user = await UserModel.create({
      googleId: profile.id,
      name: profile['_json'].given_name,
      lastname: profile['_json'].family_name,
      email: profile['_json'].email,
      image: profile['_json'].picture,
      password: hashedPass
    });
    await sendWelcomeMail(user.name, user.email);
    return done(null, user);
  }
);


passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  const user = await UserModel.findByPks(id);
  done(null, user);
});