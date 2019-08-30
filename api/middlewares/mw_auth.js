const jwt = require('jsonwebtoken');
const config = require('config');

function apiTokenAuth(req,res,next){
    const token = req.header('x-auth-token');
    if(!token) return res.status(401).send({
        success: false,
        message: "Akses ditolak. Tidak terdapat token.",
        data: null
    });
    try{
        const decoded = jwt.verify(token,config.get('jwtPrivateKey'));
        req.uid = decoded.uid;
        req.cid = decoded.cid;
        req.posid = decoded.posid;
        req.isowner = decoded.isowner;
        next();
    }catch(ex){
        return res.status(400).send({
            success: false,
            message: "Token salah.",
            data: null
        });
    }
}

module.exports = {
    apiTokenAuth : apiTokenAuth
}