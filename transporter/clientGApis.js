const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const dotenv = require("dotenv");
const { resolve } = require("url");
const { error } = require("console");
dotenv.config();

// const {EMAIL, REFRESH_TOKEN, CLIENT_SECRET, CLIENT_ID}= process.env

exports.createTransporter = async () => {
  const oauth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN,
  });

  const accessToken = await oauth2Client.getAccessToken();
  const clienttransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: "melanand4@gmail.com",
      accessToken,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
    },
  });

  console.log("have get refresh token");
  return clienttransporter;
};

// exports.createTransporter = async () => {
//   try {
//     const oauth2Client = new OAuth2(
//       process.env.CLIENT_ID,
//       process.env.CLIENT_SECRET,
//       "https://developers.google.com/oauthplayground"
//     );

//     oauth2Client.setCredentials({
//       refresh_token: process.env.REFRESH_TOKEN,
//     });

//     const accessToken = await oauth2Client.getAccessToken();

//     // new Promise((resolve, reject) => {
//     //   oauth2Client.getAccessToken((err, token) => {
//     //     if (err) {
//     //       reject("Failed to create acces token :(");
//     //     }
//     //     resolve(token);
//     //   });
//     // });

//     const clienttransporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         type: "OAuth2",
//         user: process.env.EMAIL,
//         accessToken,
//         clientId: process.env.CLIENT_ID,
//         clientSecret: process.env.CLIENT_SECRET,
//         refreshToken: process.env.REFRESH_TOKEN,
//       },
//     });
//     return clienttransporter, console.log("have get refresh token");
//   } catch (error) {
//     console.error(error);
//   }
//   const clientTransporter = Promise.resolve(clienttransporter);
//   clientTransporter
//     .then((data) => {
//       return clienttransporter, console.log("Client Transporter was connected");
//     })
//     .catch((error) => {
//       console.error();
//     });
// };
