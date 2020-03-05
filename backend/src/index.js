const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes');

//config server
app.use(express.json());
app.use(routes);

//db access
mongoose.connect('mongodb+srv://joao:123@cluster0-nuwdg.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//server
app.listen(9157);
console.log('##########################');
console.log('##########################');
console.log('######Server rodando######');
console.log('######localhost:9157######');
console.log('##########################');
console.log('##########################');

