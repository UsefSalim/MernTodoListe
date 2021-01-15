///* ------------------------- Item Model

const Item = require('../models/Items.model')

/* ! @Route  : GET => api/item
     Desc    : Get all Items
     @Access : Pubic
*/
exports.getAll = async (req, res) => {
  //! .sort date:-1 pour avoir la DB en ordre decroissant
  try {
    const all = await Item.find().sort({ date: -1 })
    if (all) res.status(200).json(all)
  } catch (error) {
    res.status(400).json(err)
  }
}

/* ! @Route  : POST => api/item
     Desc    : Create Item
     @Access : Pubic
*/
exports.addItem = async (req, res) => {
  const item = new Item({
    ...req.body
  })
  try {
    const addItem = await item.save()
    if (addItem) res.status(201).json(item)
  } catch (error) {
    res.status(400).json(err)
  }
}
/* ! @Route  : DELETE => api/item/id
     Desc    : Delete Item
     @Access : Pubic
*/
exports.deletItem = async (req, res) => {
  const { id } = req.params
  try {
    const deletItem = await Item.findById(id)
    if (deletItem) {
      await deletItem.remove()
      res.json({ message: `l'itém avec le nom ${deletItem.name} est supprimer avec succée` })
    }
  } catch (error) {
    res.status(500).json({ error })
  }
}