const Router = require('express-promise-router');
const router = new Router();
const { generateAPIToken,
        isCredentialValid
} = require('../models/model_auth');

router.post('/login', async (req, res) => {
    var body = req.body;
    const result = await isCredentialValid(body);
    if(result.length == 0) return res.status(200).send({
        success: false,
        message: "Email or password not valid"
    })
    const token = generateAPIToken(result[0])
    return res
        .status(200)
        .send({
            success: true,
            message: "Login success",
            data : {
                token: token,
                type: result[0].jenis_anggota
            }
        })
})

module.exports = router;