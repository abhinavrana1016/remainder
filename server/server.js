const express = require('express')
require('dotenv').config();
const dbconfig = require("./config/db.config");
const app = express()
const port = process.env.PORT || 500
app.listen(port,()=> console.log(`server is running on ${port}`))

const route = require("./routes/routes")
app.use(express.urlencoded({ extended: true }));
app.use('/api',route)
app.get('*', (req, res) => {
    res.status(404).json({
        msg: 'Sorry, This route is not found on this server',
    });
});
module.exports = app;