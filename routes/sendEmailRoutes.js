const { sendEmail } = require("../controller/sendEmailController");

const router = require("express").Router();

router.post("/send-email", sendEmail);
module.exports = router;
