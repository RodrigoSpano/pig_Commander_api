const transporter = require('../../services/nodemailer/nodemailerConfig');
const { user } = require('../../db');

async function sendWelcomeMail(name, email) {
  try {
    await transporter.sendMail({
      from: `${process.env.ADMIN_MAILER}`,
      to: email,
      subject: 'Welcome to PigCommander!',
      text: 'Hello world?',
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
async function sendIncomesNotification(user_id, mount, name) {
  try {
    const { dataValues: userAux } = await user.findByPk(user_id);

    await transporter.sendMail({
      from: process.env.ADMIN_MAILER,
      to: userAux.email,
      subject: 'New Income Registered',
      html: `
      <p>Hello, ${userAux.name}</p>
      <p>We wanted to inform you that a new income has been registered in your account.</p>
      <p>Income amount: $${mount}</p>
      <p>Income name: ${name}</p>
      <p>Thank you for using our service.</p>
      <p>Regards,</p>
      <p>The PigCommander Team</p>
    `,
    });
  } catch (error) {
    throw Error(error);
  }
}

async function sendExpensesNotification(user_id, mount, name) {
  try {
    const { dataValues: userAux } = await user.findByPk(user_id);

    await transporter.sendMail({
      from: process.env.ADMIN_MAILER,
      to: userAux.email,
      subject: 'New expense Registered',
      html: `
        <p>Hello, ${userAux.name}</p>
        <p>We wanted to inform you that a new expense has been registered in your account.</p>
        <p>Expense amount: $${mount}</p>
        <p>Expense name: ${name}</p>
        <p>Thank you for using our service.</p>
        <p>Regards,</p>
        <p>The PigCommander Team</p>
      `,
    });
  } catch (error) {
    throw Error(error);
  }
}
module.exports = {
  sendWelcomeMail,
  sendIncomesNotification,
  sendExpensesNotification,
};
