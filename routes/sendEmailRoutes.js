const sendEmailClients = require("../controller/clientSendEmail");

const {
  getTokens,
  callbackAndRefreshToken,
} = require("../controller/createTokenClient");
const {
  sendEmail,
  sendEmailClient,
} = require("../controller/sendEmailController");

const router = require("express").Router();

// Main
router.post("/send-email", sendEmail);
// router.get("/send-email-client", sendEmailClient);

// ClientMain
router.post("/client-send-email", sendEmailClients);
// https://gmail.googleapis.com/gmail/v1/users/melanand4@gmail.com/messages/send

// "raw": "BASE64_ENCODED_RFC822_MESSAGE"
// Client GAL

router.get("/getToken", getTokens);
router.get("/callback", callbackAndRefreshToken);

module.exports = router;
