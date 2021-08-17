const express = require('express');
const auths = require('../usecases/auth');
const router = express.Router();

router.post('/login', async (request, response) => {
    try {
        const { email, password } = request.body;
        console.log( email, password);
        const token = await auths.login( email, password );
        response.json ({
            success: true,
            message: 'Koder Logged In',
            data: {
                token
            }
        })
    } catch (error) {
        response.status(400).json({
            success: false,
            message: 'Log in error',
            error: error.message
        })
    }
})

module.exports = router