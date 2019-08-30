const Joi = require('@hapi/joi');
const jwt = require('jsonwebtoken');
const config = require('config');
const {pg,db} = require('../db');

const getSumSimpananSukarela = (uid) => {
    const sql= "SELECT coalesce(SUM(jumlah::int),0)::int as simpanan FROM simpanan WHERE jenis = 'Simpanan Sukarela' AND user_id= $1";
    return db.query(sql,[uid]);
}

const getSumSimpananWajib = (uid) => {
    const sql= "SELECT coalesce(SUM(jumlah::int),0)::int as simpanan FROM simpanan WHERE jenis = 'Simpanan Wajib' AND user_id= $1";
    return db.query(sql,[uid]);
}

const getSumSimpananShu = (uid) => {
    const sql= "SELECT coalesce(SUM(jumlah::int),0)::int as simpanan FROM simpanan WHERE jenis = 'Simpanan SHU' AND user_id= $1";
    return db.query(sql,[uid]);
}

module.exports = {
    getSumSimpananSukarela: getSumSimpananSukarela,
    getSumSimpananWajib: getSumSimpananWajib,
    getSumSimpananShu: getSumSimpananShu
}