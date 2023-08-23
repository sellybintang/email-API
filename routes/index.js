const router = require("express").Router();
const sendEmailRouter = require("./sendEmailRoutes");

router.use("/", sendEmailRouter);
module.exports = router;
