const socketio = require('socket.io');
const parseStringAsArray = require('./utils/parseStringAsArray');
const calculateDistance = require('./utils/calculateDistnce');

let io;
const connections = [];

exports.setupWebsocket = (server) => {
    io = socketio(server);

    io.on('connection', socket => {
        const { id } = socket;
        const { latitude, longitude, techs } = socket.handshake.query;
        connections.push({
            id,
            techs: parseStringAsArray(techs),
            coordinates: {
                latitude: Number(latitude),
                longitude: Number(longitude)
            }
        });
        console.log(connections)
    });
};

exports.findConnections = (coordinates, techs) => {
    return connections.filter(connections => {
        return calculateDistance(coordinates, connections.coordinates) < 10
               && connections.techs.some(item => techs.includes(item))
    });
};

exports.sendMessage = (to, message, data) => {
    to.forEach(connection => {
        io.to(connection.id).emit(message, data);
    });
};