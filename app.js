const express = require("express");
const logger = require("morgan");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv");

const port = process.env.PORT || 3011;
const router = require("./routes/index");

app.use(bodyParser.json());
app.use(logger("dev"));
app.use(cors());

app.use(router);
app.listen(port, () => console.log(`Express Listening on port ${port} `));
