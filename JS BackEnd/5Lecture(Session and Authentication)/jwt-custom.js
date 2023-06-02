const jwt = require('jsonwebtoken');   

const sign = (payload, secret, options) => {
    const promice = new Promise((resolve, reject) =>{
        jwt.sign(payload, secret, options, (err, result) => {
            if(err){
                return reject(err);
            }
            resolve(result);
        });
    });
    return promice;
}

const verify = (token, secret) => {
    const promice = new Promise((resolve, reject) =>{
        jwt.verify(token, secret, (err, result) => {
            if(err){
                return reject(err);
            }
            resolve(result);
        });
    });
    return promice;
}

module.exports = {
    sign,
    verify
}