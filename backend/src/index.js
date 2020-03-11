const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebsocket } = require('./websocket')

const app = express();
const server = http.Server(app);

app.use(cors())
app.use(express.json());
app.use(routes);

setupWebsocket(server);

mongoose.connect('mongodb+srv://joao:123@cluster0-nuwdg.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//server
server.listen(9157);
console.log('##########################');
console.log('##########################');
console.log('######Server rodando######');
console.log('######localhost:9157######');
console.log('##########################');
console.log('##########################');

