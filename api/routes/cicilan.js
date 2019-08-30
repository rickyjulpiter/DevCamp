const Router = require('express-promise-router');
const router = new Router();
const { getHistoryCicilanByPid, getLatestCicilanByPid
} = require('../models/model_cicilan');
const { getLatestPinjaman,getPinjamanByid } = require('../models/model_pinjam');
const { apiTokenAuth } = require('../middlewares/mw_auth');

router.post('/detail', [apiTokenAuth], async (req, res) => {
    const result = await getHistoryCicilanByPid();
    return res
        .status(200)
        .send({
            success: true,
            data : result
        })
})

router.post('/', [apiTokenAuth], async (req, res) => {
    const latestPinjaman = await getLatestPinjaman(req.uid);
    if(latestPinjaman[0].id == 0) return res
        .status(200)
        .send({
            success: false,
            message : "Tidak ada pinjaman"
        });
    const pinjaman = await getPinjamanByid(latestPinjaman[0].id);
    var angsuranPokok = pinjaman[0].jumlah / pinjaman[0].lama;
    var jasaAngsuranPokok = angsuranPokok * 2 /100;
    var total = angsuranPokok + jasaAngsuranPokok;
    const latestCicilan = await getLatestCicilanByPid(latestPinjaman[0].id);
    return res.status(200).send({
        success: true,
        data: {
            iuran: total,
            urutan: latestCicilan[0].id +1
        }
    });
})

module.exports = router;