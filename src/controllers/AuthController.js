const express = require('express');
const User = require('../models/User');

router = express.Router();

router.post('/register', async (req, res) => {
        try {
            const user =  await User.create(req.body);

            return res.send( { user } );
        } catch (err) {
            return res.status(400).send({ erro: 'Erro de Registro' });
        }
});

module.exports = app => app.use('/auth', router);