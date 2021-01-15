const express = require('express');
const router = express.Router()
const { getAll, addItem, deletItem } = require('../../controllers/Item.controller')



/// * ------------------------- Item Route

/* ! @Route  : GET => api/item
     Desc    : Get all Items 
     @Access : Pubic
*/
router.get('/', getAll)

/* ! @Route  : POST => api/item
     Desc    : Create Item
     @Access : Pubic
*/
router.post('/', addItem)

/* ! @Route  : POST => api/item/id
     Desc    : Create Item
     @Access : Pubic
*/
router.delete('/:id', deletItem)


module.exports = router;