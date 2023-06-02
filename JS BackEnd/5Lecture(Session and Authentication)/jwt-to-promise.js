const util  = require("util");
const jwt = require('jsonwebtoken');

module.exports = {
    sign: util.promisify(jwt.sign),
    verify: util.promisify(jwt.verify)
};