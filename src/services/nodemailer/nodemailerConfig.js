const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.ADMIN_MAILER,
    pass: process.env.MAILER_PASS
  }
});

module.exports = transporter