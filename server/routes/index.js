const { Router } = require('express');
const router = Router();

const messageController = require('../controller/Message.controller')

router.get('/', messageController.index)
router.get('/:id', messageController.show)
router.post('/', messageController.store)
router.put('/:id', messageController.update)
router.delete('/:id', messageController.deleted)

module.exports = router