
const router = require('express').Router();
const {list,detail,store,update,destroy} = require('../../controllers/genresController');
const genreValidation = require('../../validaciones/genreValidation');




router.get('/',list);


router.get('/:id', detail);
router.post('/',genreValidation, store);
router.put('/:id', update);
router.delete('/:id',destroy)


module.exports = router;