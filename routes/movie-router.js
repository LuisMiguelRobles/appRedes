'use strict'

var MovieController = require('../controllers/movie-controller'),
	express = require('express'),
	router = express.Router()

router
	.get('/', MovieController.getAll)
	.get('/agregar', MovieController.addForm)
	.post('/', MovieController.save)
	.get('/editar/:movie_id', MovieController.getOne)
	.post('/actualizar/:movie_id', MovieController.update)
	.post('/eliminar/:movie_id', MovieController.delete)
	.use(MovieController.error404)
	
module.exports = router