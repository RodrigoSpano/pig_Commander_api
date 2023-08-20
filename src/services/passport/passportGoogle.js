const passport = require('passport');
const { Strategy } = require('passport-google-oauth20');
const { user: UserModel } = require('../../db');
const { hashPassword } = require('../../utils/helpers/authHelpers');
const { sendWelcomeMail } = require('../../utils/helpers/sendMailHelper');

module.exports = new Strategy(
  {
    clientID: `${process.env.GOOGLE_CLIENT_ID}`,
    clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
    callbackURL: `${process.env.GOOGLE_CALLBACK}`,
    scope: ['email', 'profile'],
  }, async (accessToken, refreshToken, profile, done) => {

    const findUser = await UserModel.findOne({ where: { serviceId: profile.id } });
    if (!findUser) {
      const findByEmail = await UserModel.findOne({ where: { email: profile['_json'].email } });

      // verificamos si esta logeado con otro servicio
      if (findByEmail && findByEmail.serviceId !== null) return done('email is already in use by another service');

      if (!findByEmail) {
        const hashedPass = hashPassword(profile.id);
        const user = await UserModel.create({
          serviceId: profile.id,
          name: profile['_json'].given_name,
          lastname: profile['_json'].family_name,
          image: profile['_json'].picture,
          email: profile['_json'].email,
          password: hashedPass
        });
        await sendWelcomeMail(user.name, user.email);
        return done(null, user);
      }
      const updateUser = await findByEmail.update({ serviceId: profile.id, image: profile['_json'].picture }, { returning: true });
      return done(null, updateUser.dataValues);
    }
    return done(null, findUser);
  }
);


passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  const user = await UserModel.findByPks(id);
  done(null, user);
});