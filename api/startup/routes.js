const auth = require('../routes/auth');
const savings = require('../routes/savings');
const loans = require('../routes/pinjaman');
const reports = require('../routes/report');
const cicilan = require('../routes/cicilan');

module.exports = (app) => {
    app.use('/api/v1/auth', auth);
    app.use('/api/v1/savings', savings);
    app.use('/api/v1/loans', loans);
    app.use('/api/v1/report', reports);
    app.use('/api/v1/cicilan', cicilan);
    app.use(function (req, res, next) {
        return res.status(404).send({
            success: false,
            message: "URL not found"
        });
    });
}