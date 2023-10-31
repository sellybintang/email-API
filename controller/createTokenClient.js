const oAuth2 = require("../transporter/clientTransporter");

exports.getTokens = async (req, res) => {
  try {
    const authorizeUrl = await oAuth2.Oauth2Client.generateAuthUrl({
      access_type: "offline",
      scope: "https://www.googleapis.com/auth/cloud-platform",
    });
    console.log("Please open the link on the your browser");
    console.log(authorizeUrl);

    res.redirect(authorizeUrl);
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

exports.callbackAndRefreshToken = async (req, res) => {
  try {
    const authorizationCode = req.query.code;

    const { tokens } = await oAuth2.Oauth2Client.getToken(authorizationCode);
    const accesToken = tokens.access_token;
    const refreshToken = tokens.refresh_token;
    console.log(accesToken);
    console.log(refreshToken);
    res.send("Kode berhasil diterima dan diperoleh");
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

// Menerima token
// const oAuth2Client = require("");
