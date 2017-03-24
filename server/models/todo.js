`use strict`
const mongoose = require('mongoose')
const Schema = mongoose.Schema

var todoSchema = new Schema({
  todo: {type: String, required:true,unique: true},
  completed: Boolean
},
  {
    timestamps: true
  })

var Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo
