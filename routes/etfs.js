const express = require('express');
const router = express.Router();
const Etfs = require('../models/efts.model');
const {authenticateToken} = require('../helper/auth')

router.get('/:sybname',authenticateToken, async (req, res) => {
    try {
        console.log(req.params)
        let isExist = await Etfs.find({symbol_name:req.params.sybname});
        res.status(200).send(isExist);
    } catch (err) {
        console.log(err)
        res.status(400).send({ 'msg': err });
    }
});

module.exports = router;
