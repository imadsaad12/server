const express = require('express');
const {
    createInfo,
    getInfoById,
    getInfo,
    updateInfo,
    deleteInfo

}= require('../Controllers/infoControllers');
const router = express.Router();


router.get('/', getInfo)

router.get('/:id', getInfoById)

router.post('/', createInfo)

router.delete('/:id', deleteInfo)

router.patch('/:id', updateInfo)


module.exports = router;