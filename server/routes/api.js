var express = require('express');
var router = express.Router();
var controller = require('../controllers/todoController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('use /create, /read, /update, /delete');
});

router.get('/todo', controller.readTodos)
router.get('/todo/:id', controller.readTodo)
router.post('/todo', controller.createTodo)
router.put('/todo', controller.updateTodo)
router.delete('/todo', controller.deleteTodo)

module.exports = router;
