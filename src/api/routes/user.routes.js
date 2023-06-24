const express = require('express');
const {
    getAllUsers, 
    getUsersId,
    getUsersName,
    // -------------
    postUsers, 
    putUsers, 
    deleteUsers, 
    // -------------
    getAddShoeToUser
    } = require('../controller/user.controller');

const router = express.Router();

router.get('/', getAllUsers);
router.get('/id/:id', getUsersId);
router.get('/email/:email', getUsersName);
// ----------------------------------------
router.post('/', postUsers);
router.put('/:id', putUsers);
router.delete('/:id', deleteUsers);
// ----------------------------------------
router.get('/addshoe', getAddShoeToUser);



module.exports = router;