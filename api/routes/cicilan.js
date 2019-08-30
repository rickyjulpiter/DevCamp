const Router = require('express-promise-router');
const router = new Router();
const { getHistoryCicilanByPid
} = require('../models/model_cicilan');
const { apiTokenAuth } = require('../middlewares/mw_auth');

router.post('/detail', [apiTokenAuth], async (req, res) => {
    const body = req.body;
    const result = await getHistoryCicilanByPid(body.pid);
    return res
        .status(200)
        .send({
            success: true,
            data : result
        })
})

module.exports = router;