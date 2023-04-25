const db = require('../database/models'); 


module.exports = {

    
    
    getAllmovies :async ()=>{
try {

    const movies = await  db.Movie.findAll();
    return movies
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

            createMovies:async(data)=>{

                try {

                    const newMovie=db.Movie.create({
                        ...data



                    })
return newMovie

                } catch (error) {
                    throw {
                        status: 500,
                        message:error.message
                    }
                }
                




            }  ,
            MoviesDelete :async (id)=>{
                try {
                
                    
            
                    const moviesdestroy = await   db.Movie.destroy({
                        where:{
                            id
                        }
                    });
                    return moviesdestroy
                } catch (error) {
                    throw {
                        status: 500,
                        message:error.message
                    }
                }
                
                
                
                
                        
                    } ,
                    MoviesUpdate :async (data,id)=>{
                        try {
                        
                            
                    
                            const moviesupdate = await   db.Movie.update({...data},{
                                where:{
                                    id
                                }
                            });
                            return moviesupdate
                        } catch (error) {
                            throw {
                                status: 500,
                                message:error.message
                            }
                        }
                        
                        
                        
                        
                                
                            } ,
            
           
            
        }