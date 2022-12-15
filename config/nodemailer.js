const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  service: "gmail", 
  port: 587,
  secure: true,
  auth: {
    user: "geminiinvestments95@gmail.com",
    pass: "ycxpharhacmezxno",
  },
});

function sendMail(mailOptions) {
  return new Promise(function (resolve, reject) {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
      }
      resolve(info);
    });
  });
}

module.exports = sendMail;

// USAGE:
// const mailOptions = {
//     from: "support@geminiinvestments.co.uk",
//     to: "Recipient",
//     subject: ``,
//     text: ``,
//      html: ``,
// };

// const response = await sendMail(mailOptions);
