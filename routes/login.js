const express = require('express');
const router = express.Router();
const {generateAccessToken} = require('../helper/auth')

router.post('/', async (req, res) => {
    try {
        const {key} = req.body;
        console.log(key,process.env.KEY,);
        if(key === process.env.KEY)
        {
          const token = generateAccessToken({user:'ADMIN'})
          res.json({token})
          return;
        }
        res.status(403).send('ada')
    } catch (err) {
        console.log(err)
        res.status(400).send({ 'msg': err });
    }
});

module.exports = router;
