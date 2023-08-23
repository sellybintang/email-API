const nodemailer = require("nodemailer");
require("dotenv").config();

exports.transporter = nodemailer.createTransport({
  // host: "smpt.gmail.com",
  // port: "465",
  service: "gmail",
  auth: {
    user: process.env.GMAIL,
    pass: process.env.PASS,
  },
});
