require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");

const port = process.env.port;

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//rotas
const router = require("./routes/Router");
app.use(router);

app.listen(port, () => console.log(`Backend rolando na porta ${ port }`));