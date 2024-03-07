const transporter = require('../config/mailer');
const FRONTEND_DOMAIN = process.env.FRONTEND_DOMAIN || 'http://localhost:3000';

async function sendVerificationEmail(email, verificationToken) {
  const verificationLink = `${FRONTEND_DOMAIN}/verify/${verificationToken}`;

  try {
    const info = await transporter.sendMail({
      to: email,
      subject: 'Verify Your Email',
      html: `Click <a href="${verificationLink}">here</a> to verify your email.`,
    });

    console.log('Email sent:', info.response);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

module.exports = { sendVerificationEmail };
