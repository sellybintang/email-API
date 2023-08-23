const { transporter } = require("../transporter/transporter");

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
