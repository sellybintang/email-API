// EmailOption

const { createTransporter } = require("../transporter/clientGApis");

const sendEmail = async (emailOptions) => {
  try {
    let emailTransporter = await createTransporter();

    if (emailTransporter) {
      await emailTransporter.sendMail(emailOptions);
    } else {
      console.error("Email transporter is undefined.");
    }
  } catch (error) {
    console.error(error);
  }
};

console.log(sendEmail);

const sendEmailClients = async (req, res) => {
  try {
    const { subject, message, to } = req.body;

    const newSendEmail = await sendEmail({
      subject: subject,
      text: message,
      to: to,
      from: "melanand4@gmial.com",
    });
    res.status(200).json({
      status: "Succes",
      message: "Succesfully to send email",
      newSendEmail,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

module.exports = sendEmailClients;
