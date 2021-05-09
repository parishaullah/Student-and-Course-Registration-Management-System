require('dotenv').config();
const express = require("express");

/**
 * express module
 * @const
 */
const app = express();

require("./startup/cors")(app);
require("./startup/routes")(app);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`);
});