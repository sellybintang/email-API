const { OAuth2Client } = require("google-auth-library");
const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config();

// Inizialisasi Google-OAuth

const Credentials = JSON.parse(
  fs.readFileSync(
    "./client_secret_425559135871-t29v6c3739nsk40v5dishd5gpv699sl1.apps.googleusercontent.com.json"
  )
);

const auth2Client = new OAuth2Client(
  Credentials.web.client_id,
  Credentials.web.client_secret,
  Credentials.web.redirect_uris[0]
);

const Oauth2Client = Promise.resolve(auth2Client);
Oauth2Client.then((data) => {
  console.log("OAuth telah terhubung");
}).catch((error) => {
  console.error();
});
module.exports = {
  Oauth2Client: auth2Client,
  Credentials: Credentials,
};

// async function main() {
//   try {
//     const auth = new GoogleAuth({
//       scopes: "https://www.googleapis.com/auth/cloud-platform",
//     });
//     const client = await auth.getClient();
//     const projectId = await auth.getProjectId();
//     const url = `https://dns.googleapis.com/dns/v1/projects/${projectId}`;
//     const res = await client.request({ url });
//     console.log(res.data);
//   } catch {
//     main().catch(console.error);
//   }
// }
// main()
//   .then((data) => {})
//   .catch((error) => {});

// module.exports = main;
