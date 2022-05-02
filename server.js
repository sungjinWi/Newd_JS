const express = require("express");
const app = express();
const router = require("./routes")
const nunjucks = require("nunjucks")

app.use(router)


app.set("view engine", "html");


