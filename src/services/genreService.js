 const db = require('../database/models'); 


module.exports = {

    
    
    getAllgenres :async ()=>{
try {

    const genres = await  db.Genre.findAll();
    return genres
} catch (error) {
    


    throw {
        status: 500,
        message:error.message
    }



}




        
    }   ,


    getOnegenres :async (id)=>{
        try {
        
            
    
            const genre = await   db.Genre.findByPk(id);
            return genre
        } catch (error) {
            throw {
                status: 500,
                message:error.message
            }
        }
        
        
        
        
                
            } ,

            createGenre:async(data)=>{

                try {

                    const newGenre=db.Genre.create({
                        ...data



                    })
return newGenre

                } catch (error) {
                    throw {
                        status: 500,
                        message:error.message
                    }
                }
                




            }  ,
            getgenreDelete :async (id)=>{
                try {
                
                    
            
                    const genredestroy = await   db.Genre.destroy({
                        where:{
                            id
                        }
                    });
                    return genredestroy
                } catch (error) {
                    throw {
                        status: 500,
                        message:error.message
                    }
                }
                
                
                
                
                        
                    } ,
                    getUpdate :async (data,id)=>{
                        try {
                        
                            
                    
                            const genreupdate = await   db.Genre.update({...data},{
                                where:{
                                    id
                                }
                            });
                            return genreupdate
                        } catch (error) {
                            throw {
                                status: 500,
                                message:error.message
                            }
                        }
                        
                        
                        
                        
                                
                            } ,
            
           
            
        }
       