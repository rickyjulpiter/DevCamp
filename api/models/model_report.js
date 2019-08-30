const Joi = require('@hapi/joi');
const jwt = require('jsonwebtoken');
const config = require('config');
const {pg,db} = require('../db');

const getSumSimpananSukarela = (jenis) => {
    const sql= "SELECT coalesce(SUM(jumlah::int),0)::int as simpanan FROM simpanan WHERE jenis = 'Simpanan Sukarela'";
    return db.query(sql,[jenis]);
}

const getSumSimpananWajib = (jenis) => {
    const sql= "SELECT coalesce(SUM(jumlah::int),0)::int as simpanan FROM simpanan WHERE jenis = 'Simpanan Wajib'";
    return db.query(sql,[jenis]);
}

const getSumSimpananShu = (jenis) => {
    const sql= "SELECT coalesce(SUM(jumlah::int),0)::int as simpanan FROM simpanan WHERE jenis = 'Simpanan SHU'";
    return db.query(sql,[jenis]);
}

module.exports = {
    getSumSimpananSukarela: getSumSimpananSukarela,
    getSumSimpananWajib: getSumSimpananWajib,
    getSumSimpananShu: getSumSimpananShu
}