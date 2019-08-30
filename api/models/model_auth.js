const Joi = require('@hapi/joi');
const jwt = require('jsonwebtoken');
const config = require('config');
const {pg,db} = require('../db');

function generateAPIToken(user){
    const token= jwt.sign({
        uid: user.user_id, 
        email: user.email
    },config.get('jwtPrivateKey'));
    return token;
}

const isCredentialValid = (user)=>{
    const sql= "SELECT * FROM USERS WHERE email = $1 AND password = $2";
    return db.query(sql,[user.email,user.password]);
}

module.exports = {
    generateAPIToken : generateAPIToken,
    isCredentialValid: isCredentialValid
}