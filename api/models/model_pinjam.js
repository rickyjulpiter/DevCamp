const Joi = require('@hapi/joi');
const jwt = require('jsonwebtoken');
const config = require('config');
const {pg,db} = require('../db');

const insertPinjaman = (data) => {
    const column = new pg.helpers.ColumnSet(['user_id','jumlah','resiko','bunga','bunga_lunasmaju','bunga_lunastotal','total_bayar','lama','tanggal','status'],{table:'pinjaman'});
    const sql = pg.helpers.insert(data,column);
    return db.query(sql);
}

const getAllPinjamanByUid = (userId)=>{
    const sql= "SELECT * FROM pinjaman WHERE user_id = $1";
    return db.query(sql,[userId]);
}

module.exports = {
    insertPinjaman: insertPinjaman,
    getAllPinjamanByUid : getAllPinjamanByUid
}