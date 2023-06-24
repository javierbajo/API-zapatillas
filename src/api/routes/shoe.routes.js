const express = require('express');
const upload = require("../../middlewares/upload.file")
const {
    getAllShoes, 
    getShoesId,
    getShoesName,
    getShoesType,

    postShoes, 
    putShoes, 
    deleteShoes, 
    } = require('../controller/shoe.controller');

const router = express.Router();

router.get('/', getAllShoes);

router.get('/id/:id', getShoesId);
router.get('/shoeName/:shoeName', getShoesName);
router.get('/type/:type', getShoesType);

router.post('/', upload.single('image'), postShoes);
router.put('/:id', upload.single('image'), putShoes);
router.delete('/:id', deleteShoes);



module.exports = router;
