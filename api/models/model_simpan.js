const Joi = require('@hapi/joi');
const jwt = require('jsonwebtoken');
const config = require('config');
const {pg,db} = require('../db');

const insertSavings = (data) => {
    const column = new pg.helpers.ColumnSet(['user_id','jenis','tanggal','jumlah','created_at'],{table:'simpanan'});
    const sql = pg.helpers.insert(data,column);
    return db.query(sql);
}

const getAllSavingsByUid = (userId)=>{
    const sql= "SELECT * FROM simpanan WHERE user_id = $1";
    return db.query(sql,[userId]);
}

module.exports = {
    insertSavings: insertSavings,
    getAllSavingsByUid : getAllSavingsByUid
}