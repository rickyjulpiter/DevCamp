const Router = require('express-promise-router');
const router = new Router();
const { getAllPinjamanByUid,
        insertPinjaman
} = require('../models/model_pinjam');
const { apiTokenAuth } = require('../middlewares/mw_auth');

router.get('/:uid', [apiTokenAuth], async (req, res) => {
    const result = await getAllPinjamanByUid(req.params.uid);
    return res
        .status(200)
        .send({
            success: true,
            data : result
        })
})

router.post('/insert',[apiTokenAuth],async(req,res)=>{
    const body = req.body;
    try{
        await insertPinjaman(body)
    }catch(err){
        return res.status(400).send({
            success: false,
            message: "Failed to save data"
        }); 
    }
    res.status(200).send({
        success: true,
        message: "Data has been saved"
    });
})

module.exports = router;