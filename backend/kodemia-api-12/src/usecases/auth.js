const Koder = require('../models/koders');
const bcrypt = require('../lib/bcrypt');
const jwt = require('../lib/jwt');

async function login ( email, password ) {
    const koderFound = await Koder.findOne({email});
    console.log(`use case: ${email} ${password}`);
    if (!koderFound) throw new Error('Invalid credentials...')

    const isValidPassword = await bcrypt.compare(password, koderFound.password);
    
    if (!isValidPassword) throw new Error('Invalid credentials...')

    // regresaremos un token

    return jwt.sign ({ id: koderFound._id })
}

module.exports = {
    login
}