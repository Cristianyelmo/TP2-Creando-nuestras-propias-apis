const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');
const createResponseError = require('../helpers/createResponseError');
const { getAllmovies,createMovies,MoviesUpdate, MoviesDelete} = require('../services/moviesServices');

const{validationResult} = require('express-validator')
//Aqui tienen otra forma de llamar a cada uno de los modelos
const Movies = db.Movie;
const Genres = db.Genre;
const Actors = db.Actor;


const moviesController = {
    /* 'list': (req, res) => {
        db.Movie.findAll({
            include: ['genre']
        })
            .then(movies => {
                res.render('moviesList.ejs', {movies})
            })
    },
    'detail': (req, res) => {
        db.Movie.findByPk(req.params.id,
            {
                include : ['genre']
            })
            .then(movie => {
                res.render('moviesDetail.ejs', {movie});
            });
    },
    
   
    //Aqui dispongo las rutas para trabajar con el CRUD
    
    create: function (req,res) {
        Movies
        .create(
            {
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre_id
            }
        )
        .then(()=> {
            return res.redirect('/movies')})            
        .catch(error => res.send(error))
    },
   
    update: function (req,res) {
        let movieId = req.params.id;
        Movies
        .update(
            {
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre_id
            },
            {
                where: {id: movieId}
            })
        .then(()=> {
            return res.redirect('/movies')})            
        .catch(error => res.send(error))
    },
   
    destroy: function (req,res) {
        let movieId = req.params.id;
        Movies
        .destroy({where: {id: movieId}, force: true}) // force: true es para asegurar que se ejecute la acción
        .then(()=>{
            return res.redirect('/movies')})
        .catch(error => res.send(error)) 
    } */
    list : async (req, res) => {

        try {
            
          const genres = await  getAllmovies()
          
        
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
        
        
        
        
            const newGenre = await createMovies(req.body)
           
        
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
                
                  
                    const moviesupdate = await  MoviesUpdate(req.body,id)
                
                     return res.status(200).json({
                   
                ok:true,
                meta:{
                    
                    status:200,
                    
                    total:1,
                    url:`/api/genres/${id}`},
                data:moviesupdate,
                
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
                
                  
                    const movies = await  MoviesDelete(id)
                
                     return res.status(200).json({
                   
                message:`se ha borrado el producto con el id ${id}`
                
                    })
                
                
                           
                    
                } catch (error) {
                
                    
                    return  createResponseError(res,error)
                    
                }
                
                
                
                        
                    },




}

module.exports = moviesController;