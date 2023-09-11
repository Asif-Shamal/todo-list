const todoUL = document.getElementById('todo')
const form = document.getElementById('form')
const input = document.getElementById('input')
const toggle = document.querySelector('.toggle')


// Local Storage
const todo = JSON.parse(localStorage.getItem('todo'))
if (todo) {
    todo.forEach(todo  => addTodo(todo))
}



// Dark mode
toggle.addEventListener('click', (e) =>{
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark mode'
    }else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light mode'
    }
})





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

        todoEl.addEventListener('click', ()=>{
         todoEl.classList.toggle('completed')
         updateLS()
    })
        todoEl.addEventListener('contextmenu', (e)=> {
            e.preventDefault()

            todoEl.remove()
            updateLS()
        })
    
        todoUL.appendChild(todoEl)
        input.value = null


        updateLS()
    }

}




// Local storage
function updateLS() {
    todosEl = document.querySelectorAll('li')

    const todo = []

    todosEl.forEach(todoEl => {
        todo.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })

    localStorage.setItem('todo', JSON.stringify(todo))
}