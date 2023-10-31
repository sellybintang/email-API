const { transporter } = require("../transporter/transporter");
const Client = require("../transporter/clientTransporter");
const { GoogleAuth, OAuth2Client, auth } = require("google-auth-library");
const SCOPES = [
  "https://www.googleapis.com/auth/userinfo.profile",
  "https://www.googleapis.com/auth/userinfo.email",
];

// SendEmail with main Email
exports.sendEmail = async (req, res) => {
  try {
    const { to, subject, message } = req.body;

    const mailSetting = {
      from: "melanand4@gmail.com",
      to,
      subject,
      text: message,
    };

    const sendMail = await transporter.sendMail(mailSetting);
    if (!sendMail) {
      return res.status(401).json({
        status: "Failed",
        message: "Email havent been send",
      });
    }

    res.status(200).json({
      success: true,
      status: "Succes",
      message: "Email sent succesfully",
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

// SendEmail with client email

exports.sendEmailClient = async (req, res) => {
  try {
    const oAuth = await auth.generateAuthUrl({
      acces_type: "offline",
      scopes: SCOPES,
    });
    res.redirect(oAuth);
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};
