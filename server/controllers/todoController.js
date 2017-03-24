var Todo = require('../models/todo')

module.exports = {
  createTodo: function(req,res){
    Todo.create({
      todo: req.body.todo,
      completed: false
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
      completed: true,
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
  },
  readTodo: function(req,res){
    Todo.findOne({_id:req.params.id}, function(err,data){
      if(err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  }
}
