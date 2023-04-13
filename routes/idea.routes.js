/* defining routes for the calls like
Get 127.0.0.1:8080/ideaApp/v1/ideas
*/

const ideaController = require("../controllers/idea.controller")
module.exports = (app) => {
    /* get call */
     app.get("/ideaApp/v1/ideas" , ideaController.fatchAllIdeas) ;
     /* post call */      
     app.post("/ideaApp/v1/ideas",ideaController.crerateIdea);

     /* put call */
     app.put("/ideaApp/v1/ideas/:id",ideaController.updateIdea);

     /* delete */
     app.delete("/ideaApp/v1/ideas/:id" , ideaController.delete);
}