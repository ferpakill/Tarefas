const express = require('express');
const mongoose = require('mongoose');

const senha = require('./senha');
const routes = require('./routes');
const app = express();

mongoose.connect(senha.default,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
app.use(express.json());
app.use(routes);

app.listen(3333);
