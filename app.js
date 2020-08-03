<html lang="en">
    <head>
        <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    </head>
    <body>
    
    </body>
</html>

// var app = new Vue({
//     el: "#app",
//     data() {
//         return {
//             todos: [],
//             todo: ""
//         }
//     },
//     created() {
//         this.loadLocalStorage();
//     },
//     watch: {
//         todos() {
//             localStorage.setItem("todos", JSON.stringify(this.todos));
//         }
//     },
    
//     methods: {
//         loadLocalStorage(){
//             const ls = JSON.parse(localStorage.getItem("todos"));
//             console.log(ls);
//                 if(ls == null) { return; }
//                     this.todos = ls;
//                     console.log(this.todos);
//         },

//         addTodo() {
//             this.todos.push(this.todo);
//             // console.log(error);
//             this.todo = "";
//         },
//         deleteTodo(index) {
//             this.todos.splice(index, 1);
//         }
//     }
// })
