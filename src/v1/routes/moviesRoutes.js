const router = require('express').Router();
const {list,detail,store,update,destroy} = require('../../controllers/moviesController');
const moviesValidation = require('../../validaciones/moviesValidation');




router.get('/',list);


router.get('/:id', detail);
router.post('/',moviesValidation,store);
router.put('/:id', update);
router.delete('/:id',destroy)


module.exports = router;