require("dotenv").config();
const express =require('express');
const app=express();

console.log("Allah");

require("./startup/cors")(app);
require("./startup/routes")(app);


const PORT =( process.env.PORT || 3005);
app.listen(PORT,()=>{
    console.log(`Listening to port ${PORT} ...`);
});

//"test": "echo \"Error: no test specified\" && exit 1"