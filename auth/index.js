const md5 = require('md5');
const tokens = require('./tokens.json');

class Auth {
    acceptedTokens = new Set(JSON.parse(tokens));

    static isAcceptedReq(hash, tm, pubKey) {
        const {private: privateKey} = tokens[pubKey] ?? {};
        
        try {
            return md5(privateKey, pubKey) === hash;
        } catch (error) {
            return false;
        }
    }
};

module.exports = Auth