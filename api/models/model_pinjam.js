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

const getPinjamanByid = (pid) => {
    const sql= "SELECT * FROM pinjaman WHERE pinjaman_id = $1";
    return db.query(sql,[pid]);
}

const getLatestPinjaman = (userId) => {
    const sql= "SELECT coalesce(max(pinjaman_id),0) as id FROM pinjaman WHERE user_id = $1";
    return db.query(sql,[userId]);
}

module.exports = {
    insertPinjaman: insertPinjaman,
    getAllPinjamanByUid : getAllPinjamanByUid,
    getLatestPinjaman: getLatestPinjaman,
    getPinjamanByid: getPinjamanByid
}