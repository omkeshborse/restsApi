const express = require('express');

const app = express();
/* stich  routs to servers */
app.use(express.json())
require("./routes/idea.routes")(app);




/* starting server */
app.use(myMiddelWare);
function myMiddelWare(request ,reponse ,next ){
    console.log("inside middel ware i created ");
    next();// it will pass control on next step
}

app.listen(8080 , ()=>{
    console.log("server is started");
})