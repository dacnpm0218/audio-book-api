require('dotenv').config();
const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");
const passport = require("passport");
const process = require("process");

const db = require("./config/db");
const route = require("./routers");

const app = express();
const port = process.env.PORT || 8000;

app.use(morgan("combined"));
app.use(methodOverride("_method"));
app.use(cors({ origin: "*", optionsSuccessStatus: 200 }));
app.use(passport.initialize());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

require('./authenticate');
db.connect();
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
