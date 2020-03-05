const { Router } = require('express');
const routes = Router();
//controllers
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');
//routes
routes.get('/all-devs', DevController.index);
routes.post('/cad-dev', DevController.store);

routes.get('/search', SearchController.index);
module.exports = routes;