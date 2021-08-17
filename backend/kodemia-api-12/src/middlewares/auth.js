const jwt = require('../lib/jwt');


function auth ( request, response, next) {
    try {
        const { authorization: token } = request.headers;
        const decodedToken = jwt.verify( token );
        if( !decodedToken ) throw new Error('Not Authorized');  /* Si ocurre un error hasta aqui llega */
        request.userCurrent = decodedToken.id;
        next()

    } catch (error) {
        response.status(401).json({
            success:false, 
            message: 'Not Authorized',
            error: error.message
        })
    }
}

module.exports = auth