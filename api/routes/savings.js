const Router = require('express-promise-router');
const router = new Router();
const { getAllSavingsByUid,
        insertSavings
} = require('../models/model_simpan');
const { apiTokenAuth } = require('../middlewares/mw_auth');

router.get('/:uid',[apiTokenAuth],async (req, res) => {
    const result = await getAllSavingsByUid(req.params.uid);
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
        await insertSavings(body)
    }catch(err){
        console.log(err);
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