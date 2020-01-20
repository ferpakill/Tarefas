const express = require('express');
const SessionController = require('./controller/SessionController')
const TarefaController = require('./controller/TarefaController')
const routes = express.Router();


routes.post('/sessions', SessionController.store);
routes.get('/tarefa', TarefaController.index);
routes.post('/tarefa', TarefaController.store);

module.exports = routes;