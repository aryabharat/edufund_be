const express = require('express');
const router = express.Router();
const Symbol  = require('../models/symbol.model');
const {authenticateToken} = require('../helper/auth')

router.get('/', authenticateToken,async (req, res) => {
    try {
        let isExist = await Symbol.find({}).select({"Symbol":true, "Security_Name":true});
        res.status(200).send(isExist);
    } catch (err) {
        console.log(err)
        res.status(400).send({ 'msg': err });
    }
});

module.exports = router;
