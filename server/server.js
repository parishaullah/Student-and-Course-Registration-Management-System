require('dotenv').config();
const express = require("express");
//const exphb = require("express-handlebars");
//const bodyParser = require("body-parser");
//const path = require("path");
//const courses = require('./routes/courses');
//const db = require("./db");

// Database
//const db = require('./config/database');

//test DB
/*db.authenticate()
    .then(() => console.log('db connected'))
    .catch(err => console.log('Error: ' + err))*/

const app = express();

require("./startup/cors")(app);
require("./startup/routes")(app);

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`);
});