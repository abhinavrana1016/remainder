const express = require('express')
require('dotenv').config();
const dbconfig = require("./config/db.config");
const app = express()
const port = process.env.PORT || 500
app.listen(port,()=> console.log(`server is running on ${port}`))