const auth = require('../routes/auth');
const savings = require('../routes/savings');
const loans = require('../routes/pinjaman');

module.exports = (app) => {
    app.use('/api/v1/auth', auth);
    app.use('/api/v1/savings', savings);
    app.use('/api/v1/loans', loans);
    app.use(function (req, res, next) {
        return res.status(404).send({
            success: false,
            message: "URL not found"
        });
    });
}