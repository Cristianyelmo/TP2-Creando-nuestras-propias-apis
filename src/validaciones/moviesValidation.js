const {check} = require('express-validator');

module.exports =[

check('title')
  .notEmpty()
  .withMessage("el campo 'title' es obligatorio"),

  check('rating')
  .notEmpty()
  .withMessage("el campo 'rating' es obligatorio"),

  check('awards')
  .notEmpty()
  .withMessage("el campo 'awards' es obligatorio"),


  check('length')
  .notEmpty()
  .withMessage("el campo 'length' es obligatorio"),

  check('genre_id')
  .notEmpty()
  .withMessage("el campo 'genre_id' es obligatorio"),
  

  
]