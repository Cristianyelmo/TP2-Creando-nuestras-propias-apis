const router = require('express').Router();
 const {list,detail,store,update,destroy} = require('../../controllers/actorsController'); 




router.get('/',list);


router.get('/:id', detail);
router.post('/', store);
router.put('/:id', update);
router.delete('/:id',destroy)


module.exports = router;