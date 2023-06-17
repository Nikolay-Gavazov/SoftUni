const jwt = require('../jwt-to-promise');
const secret = 'lapamChushki';
exports.autMidd = async (req, res, next) => {
    const token = req.cookies['token'];

    if(token){
        try {
           const decodedToken = await jwt.verify(token, secret);
           req.user = decodedToken;
           next();
        } catch (error) {
            res.clearCookie('token');
            res.redirect('/login')
        }
    }else{
        next();
    }
}

exports.isAuth = (req, res, next) => {
    if(!req.user){
        return res.redirect('/login');
    }

    next();
}