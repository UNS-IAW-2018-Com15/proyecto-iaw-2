var express = require('express');
var router = express.Router();
const complejosApi = require('../controllers/complejosAPI');

/* GET home page. */
router.get('/complejos', complejosApi.getComplejos);
router.get('/comentarios/:id',complejosApi.getComentarios);

module.exports = router;
