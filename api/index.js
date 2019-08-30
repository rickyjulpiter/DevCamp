const bodyParser = require('body-parser')
const express = require('express');
const app = express();
var cors = require('cors');

app.use(bodyParser.json())
app.use(cors());

require('./startup/routes')(app);
require('./startup/config')();

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log(`Server on port ${port}`);
});

module.exports = server;