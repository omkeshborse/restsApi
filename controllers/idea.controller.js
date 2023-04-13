/* search all idea */
const { request, response } = require("express");
const ideas = require("../models/idea.model")
/* const { request, response } = require("express"); */

exports.fatchAllIdeas = (request ,response ) =>{
    response.status(200).send(ideas);
}
/* 
create new idea 

 */
let idCount = 1 ;
exports.crerateIdea = (request ,response) =>{
    /* read the request body */

    const idea = request.body ;

    /* need to genrate idea id */
    idea.id = ++idCount ;
    /* save it in list of existing idea */
    ideas[idCount] = idea ;
    /* return  the respons */
    response.status(201).send(ideas[idCount]);



}
/* 
update idea
 */
exports.updateIdea= (request ,response)=>{
        /* i need to read id in path */
        /* 127.0.0.1:8080/ideaApp/v1/ideas/1 */

    const ideaId = request.params.id ;

    /* if idea is present then - modify elese retrun error */

    if(ideas[ideaId]){
        
        ideas[ideaId] = request.body ;

        response.status(200).send(ideas[ideaId]);
    }else{
        response.status(400).send({
            message : "idea id passed is not correct " 
        })
    }
}
/* delete this idea */

exports.delete=(request,response)=>{

    /* check if present yes -delet no -return*/
    if(ideas[request.params.id]){
        delete ideas[request.params.id] ;

        response.status(200).send({
            message :"sucessfully deleted"
        })

    }else{
        response.status(400).send({
            message :"wrong idea id " 
        })
    }

}