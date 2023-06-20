const jwt = require('../jwt-to-promise');
exports.auth = async(req, res, next) => {
    const token = req.header('X-Authorization');

    if(token){
        try {
            const decodedToken = await jwt.verify(token, 'DedovDedov');
        
            res.user = decodedToken;
            next();
        } catch (error) {
            res.status(401).json({
                error: 'You are not authorizer!'
            })
        }

    }else{
        next();
    }

}