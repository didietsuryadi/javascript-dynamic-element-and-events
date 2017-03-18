var Todo = require('../models/todo')

module.exports = {
  createTodo: function(req,res){
    Todo.create({
      todo: req.body.todo,
      completed: req.body.completed
    }, function (err, data) {
      if (err) {
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  updateTodo: function(req,res){
    Todo.findOneAndUpdate({_id:req.params.id}, {
      todo: req.body.todo,
      completed: req.body.completed,
      updateAt: new Date()
    }, {new:true}, function(err, data){
      if (err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  deleteTodo: function(req,res){
    Todo.findOneAndRemove({_id:req.params.id}, function(err, data){
      if (err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  readTodos: function(req,res){
    Todo.find({}, function(err,data){
      if(err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  }
}
