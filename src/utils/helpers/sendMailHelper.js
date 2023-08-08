const transporter = require('../../services/nodemailer/nodemailerConfig');
const { user } = require('../../db');


async function sendWelcomeMail(name, email) {
  try {
    await transporter.sendMail({
      from: process.env.ADMIN_MAILER, // desde donde lo mandamos
      to: email, // quien recibe
      subject: 'Welcome to PigCommander!', // Subject line
      text: 'Hello world?', // plain text body
      html: `
            <p>Hello ${name},</p>
          <p>Welcome to PigCommander! We're excited to have you as part of our piggy financial community.</p>
          <p>PigCommander is your companion on the journey to better expense control. Record your transactions, set budget limits, and watch your finances come to life in an organized and effective manner.</p>
          <p>Please log in to your account to start taking the reins of your personal finances in a fun and efficient way.</p>
          <p>Thank you for joining PigCommander, and we're thrilled to assist you on your path to improved financial management.</p>
          <p>With piggy responsibility,</p>
          <p>The PigCommander Team</p>
          `,
    });
  } catch (error) {
    throw Error(error);
  }
}
async function sendIncomesNotification(user_id,mount) {
    try {
        const userAux = user.findByPk({where: {id : user_id}})
        console.log(console.log('userAux',userAux))

     /*  await transporter.sendMail({
        from: process.env.ADMIN_MAILER, // desde donde lo mandamos
        to: email, // quien recibe
        subject: 'Welcome to PigCommander!', // Subject line
        text: 'Hello world?', // plain text body
        html: `
              <p>Hello ${name},</p>
            <p>Welcome to PigCommander! We're excited to have you as part of our piggy financial community.</p>
            <p>PigCommander is your companion on the journey to better expense control. Record your transactions, set budget limits, and watch your finances come to life in an organized and effective manner.</p>
            <p>Please log in to your account to start taking the reins of your personal finances in a fun and efficient way.</p>
            <p>Thank you for joining PigCommander, and we're thrilled to assist you on your path to improved financial management.</p>
            <p>With piggy responsibility,</p>
            <p>The PigCommander Team</p>
            `,
      }); */
    } catch (error) {
      throw Error(error);
    }
  }
module.exports = {
    sendWelcomeMail,
    sendIncomesNotification
};
