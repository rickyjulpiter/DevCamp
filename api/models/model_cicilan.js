const Joi = require('@hapi/joi');
const jwt = require('jsonwebtoken');
const config = require('config');
const {pg,db} = require('../db');

const getHistoryCicilanByPid = () => {
    const sql= "SELECT c.pinjaman_id, c.cicilan_ke, c.jumlah_bunga, c.angsuran_pokok, c.jumlah, p.lama FROM cicilan c,pinjaman p WHERE p.pinjaman_id = c.pinjaman_id ORDER BY c.TANGGAL DESC";
    return db.query(sql);
}

const getLatestCicilanByPid = (pid) => {
    console.log("pid:"+ pid);
    const sql= "SELECT coalesce(max(cicilan_ke),0) as id FROM cicilan WHERE pinjaman_id = $1";
    return db.query(sql,[pid]);
}


module.exports = {
    getHistoryCicilanByPid: getHistoryCicilanByPid,
    getLatestCicilanByPid: getLatestCicilanByPid
}