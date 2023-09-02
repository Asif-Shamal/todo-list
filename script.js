const todoUL = document.getElementById('todo')
const form = document.getElementById('form')
const input = document.getElementById('input')

form.addEventListener('submit', (e) =>{
    e.preventDefault()

    addTodo()
})


function addTodo(todo){
    let todoText = input.value 

    if(todo) {
        todoText = todo.text
    }

    if(todoText){
        const todoEl = document.createElement('li')

        if(todo && todo.completed) {
            todoEl.classList.add('completed')
        }

        todoEl.innerText = todoText

        todoUL.appendChild(todoEl)

    }

}