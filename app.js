'use strict';
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
//---------------middlevare------------------//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
//-------------------------------------------//


require('./src')(app);
app.listen(3000, () => {
    console.log('Server started on port 3000...');
});
