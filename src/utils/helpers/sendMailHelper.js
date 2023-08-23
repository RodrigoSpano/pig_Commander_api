const transporter = require('../../services/nodemailer/nodemailerConfig');
const { user, categories,method } = require('../../db');
const { generateStyles } = require('./generateStyles');


async function sendWelcomeMail(name, email) {
  try {
    await transporter.sendMail({
      from: `${process.env.ADMIN_MAILER}`,
      to: email,
      subject: 'Welcome to PigCommander!',
      html: ` <head>
      ${generateStyles()}
      </head>
<body>
  <div class="center-container">
    <div class="outer-rectangle">
      <div class="inner-rectangle">
        <div class="message">
          <p class="title">Welcome to PigCommander!</p>
          <div class="income-details">
          <p classname="detail">We're excited to have you as part of our piggy financial community.</p>
          <p classname="detail">PigCommander is your companion on the journey to better expense control. Record your transactions,
          set budget limits, and watch your finances come to life in an organized and effective manner.</p>
          <p classname="detail">Please log in to your account to start taking the reins of your personal 
          finances in a fun and efficient way.</p>
          <p classname="detail">Thank you for joining PigCommander, and we're thrilled to assist you on 
          your path to improved financial management.</p>
          
          </div>
          <p class="signature">Regards,<br>The PigCommander Team</p>
        </div>
      </div>
    </div>
  </div>
</body>`,
    });
  } catch (error) {
    console.log('emailError:', error.message);
  }
}

async function sendIncomesNotification(user_id, amount, name,category_id,method_id) {
  try {
    const { dataValues: userAux } = await user.findByPk(user_id);

    const {name: categoryName} = await categories.findByPk(category_id);
    const {name: methodName} = await method.findByPk(method_id);
    await transporter.sendMail({
      from: process.env.ADMIN_MAILER,
      to: userAux.email,
      subject: 'New Income Registered',
      html: `
      <head>
      ${generateStyles()}
</head>
<body>
  <div class="center-container">
    <div class="outer-rectangle">
      <div class="inner-rectangle">
        <div class="message">
          <p class="title">Income Notification</p>
          <div class="income-details">
            <p class="detail"><strong>Hello, ${userAux.name}</strong></p>
            <p class="detail">We wanted to inform you that a new income has been registered in your account.</p>
            <p class="detail"><strong>Amount:</strong> $${amount}</p>
            <p class="detail"><strong>Name:</strong> ${name}</p>
            <p class="detail"><strong>Category:</strong> ${categoryName}</p>
            <p class="detail"><strong>Method:</strong> ${methodName}</p>
            <p class="detail">Thank you for using our service.</p>
          </div>
          <p class="signature">Regards,<br>The PigCommander Team</p>
        </div>
      </div>
    </div>
  </div>
</body>
    `,
    });
  } catch (error) {
    console.log('emailError:', error.message);
  }
}

async function sendExpensesNotification(user_id, amount, name, category_id, method_id) {
  try {

    const { dataValues: userAux } = await user.findByPk(user_id);
    const {name: categoryName} = await categories.findByPk(category_id);
    const {name: methodName} = await method.findByPk(method_id);

    await transporter.sendMail({
      from: process.env.ADMIN_MAILER,
      to: userAux.email,
      subject: 'New expense Registered',
      html:  `
      <head>
      ${generateStyles()}
</head>
<body>
  <div class="center-container">
    <div class="outer-rectangle">
      <div class="inner-rectangle">
        <div class="message">
          <p class="title">Expense Notification</p>
          <div class="income-details">
            <p class="detail"><strong>Hello, ${userAux.name}</strong></p>
            <p class="detail">We wanted to inform you that a new expense has been registered in your account.</p>
            <p class="detail"><strong>Amount:</strong> $${amount}</p>
            <p class="detail"><strong>Name:</strong> ${name}</p>
            <p class="detail"><strong>Category:</strong> ${categoryName}</p>
            <p class="detail"><strong>Method:</strong> ${methodName}</p>
            <p class="detail">Thank you for using our service.</p>
          </div>
          <p class="signature">Regards,<br>The PigCommander Team</p>
        </div>
      </div>
    </div>
  </div>
</body>
    `,
    });
  } catch (error) {
    console.log('emailError:', error.message);
  }
}

async function sendIncomesAutoNotification(user_id, amount, date) {
  try {
    const { dataValues: userAux } = await user.findByPk(user_id);

    await transporter.sendMail({
      from: process.env.ADMIN_MAILER,
      to: userAux.email,
      subject: 'New automatized Income Registered',
      html: `
      <head>
      ${generateStyles()}
</head>
      <body>
  <div class="center-container">
    <div class="outer-rectangle">
      <div class="inner-rectangle">
        <div class="message">
          <p class="title">Income automatized notification</p>
          <div class="income-details">
            <p class="detail"><strong>Hello, ${userAux.name}</strong></p>
            <p class="detail">We wanted to inform you that a new income has been automatized in your account.</p>
            <p class="detail">Amount: $${amount}</p>
            <p class="detail">Income date: on the ${date} day of each month</p>
            <p class="detail">Thank you for using our service.</p>
          </div>
          <p class="signature">Regards,<br>The PigCommander Team</p>
        </div>
      </div>
    </div>
  </div>
</body>
    `,
    });
  } catch (error) {
    throw Error(error);
  }
}

async function sendExpenseAutoNotification(user_id, amount, date) {
  try {
    const { dataValues: userAux } = await user.findByPk(user_id);

    await transporter.sendMail({
      from: process.env.ADMIN_MAILER,
      to: userAux.email,
      subject: 'New automatized Expense Registered',
      html: `
      <head>
      ${generateStyles()}
</head>
      <body>
  <div class="center-container">
    <div class="outer-rectangle">
      <div class="inner-rectangle">
        <div class="message">
          <p class="title">Expense automatized notification</p>
          <div class="income-details">
            <p class="detail"><strong>Hello, ${userAux.name}</strong></p>
            <p>We wanted to inform you that a new expense has been automatized in your account.</p>
            <p>Amount: $${amount}</p>
            <p>Expense date: on the ${date} day of each month</p>
            <p class="detail">Thank you for using our service.</p>
          </div>
          <p class="signature">Regards,<br>The PigCommander Team</p>
        </div>
      </div>
    </div>
  </div>
</body>
    `,
    });
  } catch (error) {
    throw Error(error);
  }
}

async function sendSubscribeNotification(user_id) {
  try {
    const { dataValues: userAux } = await user.findByPk(user_id);

    await transporter.sendMail({
      from: process.env.ADMIN_MAILER,
      to: userAux.email,
      subject: 'Congratulations on Upgrading to Premium!',
      html: `
      <head>
      ${generateStyles()}
</head>
<body>
<div class="center-container">
  <div class="outer-rectangle">
    <div class="inner-rectangle">
      <div class="message">
        <div class="income-details">
          <p class="detail"><strong>Hello, ${userAux.name}</strong></p>
          <p classname="detail">We're thrilled to let you know that you've successfully upgraded to our Premium plan!</p>
        <p classname="detail">As a Premium member, you now have access to exclusive features and benefits.</p>
        <p classname="detail">Thank you for choosing our service for managing your finances.</p>
          <p classname="detail">If you have any further comments or questions, please don't hesitate to reach out.</p>
        </div>
        <p class="signature">Regards,<br>The PigCommander Team</p>
      </div>
    </div>
  </div>
</div>
</body>`,
    });
  } catch (error) {
    console.log('emailError:', error.message);
  }
}

async function sendReviewNotification(user_id, reviewText) {
  try {
    const { dataValues: userAux } = await user.findByPk(user_id);

    await transporter.sendMail({
      from: process.env.ADMIN_MAILER,
      to: userAux.email,
      subject: 'New Review Posted',
      html: `
      <head>
      ${generateStyles()}
</head>
<body>
<div class="center-container">
  <div class="outer-rectangle">
    <div class="inner-rectangle">
      <div class="message">
        <div class="income-details">
          <p class="detail"><strong>Hello, ${userAux.name}</strong></p>
          ${ reviewText !== undefined 
            ? `<p>Thank you for leaving a review on our website:</p>
               <p>${reviewText}</p>`
            : '' }
          <p>We value your feedback and appreciate your time in sharing your thoughts.</p>
          <p>If you have any further comments or questions, please don't hesitate to reach out.</p>
          <p class="detail">Thank you for using our service.</p>
        </div>
        <p class="signature">Regards,<br>The PigCommander Team</p>
      </div>
    </div>
  </div>
</div>
</body>`
    });
  } catch (error) {
    console.log('emailError:', error.message);
  }
}

async function sendForgotPasswordNotification(userInf) {
  try {
    await transporter.sendMail({
      from: process.env.ADMIN_MAILER,
      to: userInf.email,
      subject: 'password change requested!',
      html: 
      `
      <head>
      ${generateStyles()}
      </head>
      <body>
      <div class="center-container">
        <div class="outer-rectangle">
          <div class="inner-rectangle">
            <div class="message">
              <div class="income-details">
                <p class="detail"><strong>Hello, ${userInf.name}</strong></p>
                <p class="detail">You have requested a password change</p>
                <p class="detail">to change the password click this link:</p>
                <a href='${process.env.CLIENT_URI}/recovery/${userInf.id}' target='_blank'>create new password</a>
                <p class="detail">If you have any further comments or questions, please don't hesitate to reach out.</p>
                <p class="detail">Thank you for using our service.</p>
              </div>
              <p class="signature">Regards,<br>The PigCommander Team</p>
            </div>
          </div>
        </div>
      </div>
      </body>`
        
      
    });
  } catch (error) {
    console.log('emailError', error.message);
  }
}


module.exports = {
  sendWelcomeMail,
  sendIncomesNotification,
  sendExpensesNotification,
  sendSubscribeNotification,
  sendIncomesAutoNotification,
  sendExpenseAutoNotification,
  sendReviewNotification,
  sendForgotPasswordNotification
};
