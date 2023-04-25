const db = require('../database/models');
const createResponseError = require('../helpers/createResponseError');
const { getAllgenres ,getOnegenres,createGenre,getgenreDelete,getUpdate} = require('../services/genreService');
const sequelize = db.sequelize;


const{validationResult} = require('express-validator')




const genresController = {
    list : async (req, res) => {

try {
    
  const genres = await  getAllgenres()
  

    return res.status(200).json({
ok:true,
meta:{
    
    status:200,
    
    total:genres.length},
data:genres,
url:'/api/genres'

    })



} catch (error) {


return  createResponseError(res,error)

    
}









    },
detail: async(req, res) => {

try {

    const{
        params:{id}
    } = req

  
    const genre = await  getOnegenres(id)

     return res.status(200).json({
   
ok:true,
meta:{
    
    status:200,
    
    total:1,
    url:`/api/genres/${id}`},
data:genre,

    })


           
    
} catch (error) {

    
    return  createResponseError(res,error)
    
}



        
    },

    
    


    store:async(req,res)=>{



try {
    const errors = validationResult(req)

  
  

  
  if(!errors.isEmpty()) throw{
    status:400,
    message:errors.mapped()
  }




    const newGenre = await createGenre(req.body)
   

    return res.status(200).json({
        ok:true,
        meta:{
            
            status:200,
            
            total:1},
        data:newGenre,
        url:`/api/genres/${newGenre.id}`
        
            })
    
} catch (error) {
    return  createResponseError(res,error)
}


    },

    update:async(req,res)=>{
        try {

            const{
                params:{id}
            } = req
        
          
            const genre = await  getUpdate(req.body,id)
        
             return res.status(200).json({
           
        ok:true,
        meta:{
            
            status:200,
            
            total:1,
            url:`/api/genres/${id}`},
        data:genre,
        
            })
        
        
                   
            
        } catch (error) {
        
            
            return  createResponseError(res,error)
            
        }
    },
    destroy: async(req, res) => {

        try {
        
            const{
                params:{id}
            } = req
        
          
            const genre = await  getgenreDelete(id)
        
             return res.status(200).json({
           
        message:`se ha borrado el producto con el id ${id}`
        
            })
        
        
                   
            
        } catch (error) {
        
            
            return  createResponseError(res,error)
            
        }
        
        
        
                
            },

}

module.exports = genresController;