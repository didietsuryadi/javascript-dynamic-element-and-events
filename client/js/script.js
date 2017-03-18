






// let list = 1;
//
// $.ajax({
// method: "GET",
// url: "/api/todos",
// dataType: "json"
// })
// .done(function(data) {
//   buildTable(data)
// });
//
// function buildTable(data){
//   let html=""
//   for(let i = 0; i < data.length; i++, list++){
//     let img = '';
//     if(data[i].completed) {
//       img = '<img src="images/check.png" style="width:30px;" />'
//     } else {
//       img = '<img src="images/false.png" style="width:30px;" />'
//     }
//     html += `<tr id="${data[i]._id}">`
//     html += `<td>${list}</td>`
//     html += `<td>${data[i].todo}</td>`
//     html += `<td id="update_${data[i]._id}">${img}</td>`
//     html +=
//     `<td>
//       <span class="fa fa-trash fa-2x" onclick="delete_todo('${data[i]._id}')" style="margin-right:10px; cursor: pointer;"></span> |
//       <span class="fa fa-edit fa-2x" onclick="update_todo('${data[i]._id}')" style="margin-left:10px; cursor: pointer;"></span>
//     </td>`
//     html += `</tr>`
//   }
//   $("#todos-table tbody").html(html)
// }
//
// $("#todo-form").submit(function(){
//   let todo = $("input[name=todo]").val();
//   $.ajax({
//   method: "POST",
//   url: "/api/todos/add",
//   data: {todo: todo},
//   dataType: "json"
//   })
//   .done(function(data) {
//     addTable(data)
//     $("#todo").val("");
//     if(data.completed) {
//       img = '<img src="images/check.png" style="width:30px;" />'
//     } else {
//       img = '<img src="images/false.png" style="width:30px;" />'
//     }
//     $(`#update_${data._id}`).html(img)
//   });
//   return false;
// })
//
// function addTable(data){
//   let html = ""
//   html += `<tr id="${data._id}">`
//   html += `<td>${list}</td>`
//   html += `<td>${data.todo}</td>`
//   html += `<td id="update_${data._id}">${data.completed}</td>`
//   html +=
//   `<td>
//     <span class="fa fa-trash fa-2x" onclick="delete_todo('${data._id}')" style="margin-right:10px; cursor: pointer;"></span> |
//     <span class="fa fa-edit fa-2x" onclick="update_todo('${data._id}')" style="margin-left:10px; cursor: pointer;"></span>
//   </td>`
//   html += `</tr>`
//   $("#todos-table tbody").append(html)
//   list++
// }
//
// function delete_todo(id) {
//   $.ajax({
//     type: "DELETE",
//     url: "/api/todos/delete",
//     data: {id: id},
//     dataType: "json"
//   })
//   .done(function(data) {
//     $(`#${data._id}`).html('')
//   });
//
//   return false;
// }
//
// function update_todo(id) {
//   let getComplete = $(`#update_${id}`).html()
//
//   if(getComplete){
//     $(`#update_${id}`).html(false)
//   } else {
//     $(`#update_${id}`).html(true)
//   }
//   console.log(getComplete);
//   $.ajax({
//     type: "PUT",
//     url: "/api/todos/update",
//     data: {id: id},
//     dataType: "json"
//   })
//   .done(function(data) {
//     console.log(data);
//     let img = '';
//     if(data.completed) {
//       img = '<img src="images/false.png" style="width:30px;" />'
//     } else {
//       img = '<img src="images/check.png" style="width:30px;" />'
//     }
//     $(`#update_${data._id}`).html(img)
//   });
//   return false;
// }
