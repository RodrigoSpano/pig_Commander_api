const passport = require('passport');
const { Strategy: GithubStrategy } = require('passport-github2');
const { user: UserModel } = require('../../db');
const { hashPassword } = require('../../utils/helpers/authHelpers');
const { sendWelcomeMail } = require('../../utils/helpers/sendMailHelper');

module.exports = new GithubStrategy({
  clientID: `${process.env.GITHUB_CLIENT_ID}`,
  clientSecret: `${process.env.GITHUB_CLIENT_SECRET}`,
  callbackURL: `${process.env.GITHUB_CALLBACK}`
}, async (accessToken, refreshToken, profile, done) => {
  const findUser = await UserModel.findOne({ where: { serviceId: profile.id } });

  if (!findUser) {
    const findByEmail = await UserModel.findOne({ where: { email: profile['_json'].email } });

    // verificamos si esta logeado con otro servicio
    if (findByEmail && findByEmail.serviceId !== null) return done('email is already in use by another service');

    if (!findByEmail) {
      const fullname = profile['_json'].name.split(' ');
      const hashedPass = hashPassword(profile.id);
      const user = await UserModel.create({
        serviceId: profile.id,
        name: fullname[0],
        lastname: fullname[1],
        image: profile['_json'].avatar_url,
        email: profile['_json'].email,
        password: hashedPass
      });
      await sendWelcomeMail(user.name, user.email);
      return done(null, user);
    }
    const updateUser = await findByEmail.update({ serviceId: profile.id }, { returning: true });
    return done(null, updateUser.dataValues);
  }
  return done(null, findUser);
});

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  const user = await UserModel.findByPks(id);
  done(null, user);
});