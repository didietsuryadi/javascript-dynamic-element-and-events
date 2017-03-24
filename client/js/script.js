var app = new Vue({
  el:'#app',
  data:{
    todos : [],
    todo : ''
  },
  methods:{
    getTodos: function () {
      axios.get('http://localhost:3000/api/todo').then(function (result) {
        app.todos = result.data
      })
    },
    deleteTodo: function (id) {
      axios.delete('http://localhost:3000/api/todo/'+id).then(function (result) {
        alert(`todo ${result.data.todo} has been deleted`)
        app.getTodos()
      })
    },
    update: function (id) {
      axios.put('http://localhost:3000/api/todo/'+id).then(function (result) {
        alert(`todo ${result.data.todo} has been updated`)
        app.getTodos()
      })
    },
    create: function (e) {
      e.preventDefault()
      axios.post('http://localhost:3000/api/todo/',{
        todo: app.todo
      }).then(function (result) {
        app.todos.push(result.data)
        app.todo = ''
        app.getTodos()
      })
    }
  }
})

app.getTodos()
