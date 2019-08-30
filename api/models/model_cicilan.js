const Joi = require('@hapi/joi');
const jwt = require('jsonwebtoken');
const config = require('config');
const {pg,db} = require('../db');

const getHistoryCicilanByPid = (pid) => {
    const sql= "SELECT pinjaman_id, cicilan_ke, jumlah_bunga, angsuran_pokok, jumlah FROM cicilan WHERE pinjaman_id = $1";
    return db.query(sql,[pid]);
}

module.exports = {
    getHistoryCicilanByPid: getHistoryCicilanByPid
}