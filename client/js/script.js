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
    delete: function (id) {
      axios.delete('http://localhost:3000/api/todo/'+id).then(function (result) {
        alert(`todo ${result.data.todo} has been deleted`)
      })
    },
    update: function (id) {
      axios.put('http://localhost:3000/api/todo/'+id).then(function (result) {
        
      })
    }
  }
})

app.getTodos()
