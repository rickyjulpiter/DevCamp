const Router = require('express-promise-router');
const router = new Router();
const { getSumSimpananSukarela,
    getSumSimpananWajib,
    getSumSimpananShu
} = require('../models/model_report');
const { apiTokenAuth } = require('../middlewares/mw_auth');

router.get('/harta', [apiTokenAuth], async (req, res) => {
    const sukarela = await getSumSimpananSukarela(req.uid);
    const wajib = await getSumSimpananWajib(req.uid);
    const shu = await getSumSimpananShu(req.uid);
    var pokok = 0;
    if(req.type == "GOLD") pokok = 100000;
    else if(req.type == "SILVER") pokok = 75000;
    else if(req.type == "BRONZE") pokok = 50000;
    return res
        .status(200)
        .send({
            success: true,
            data : {
                sukarela: sukarela[0].simpanan,
                wajib: wajib[0].simpanan,
                pokok: pokok,
                shu: shu[0].simpanan
            }
        })
})

module.exports = router;