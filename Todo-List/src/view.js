function layout() {
    let body = document.querySelector('body');

    let header = document.createElement('header');
    body.appendChild(header);

    let title = document.createElement('div');
    title.classList.add('title');
    title.textContent = 'ToDo List';
    header.appendChild(title);

    let content = document.createElement('div');
    content.classList.add('content');
    body.appendChild(content);

    let sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');
    content.appendChild(sidebar);

    let todoList = document.createElement('div');
    todoList.classList.add('todo-list');
    content.appendChild(todoList);
}

function populateSidebar(categories) {
    let sidebar = document.querySelector('div.sidebar');

    let header = document.createElement('div');
    header.classList.add('header');
    header.textContent = 'Categories';
    sidebar.appendChild(header);
    header.appendChild(document.createElement('hr'));

    let categoryDiv = document.createElement('div');
    categoryDiv.classList.add('categories');
    sidebar.appendChild(categoryDiv);

    categories.forEach(category => {
        let categoryBtn = document.createElement('button');
        let name = document.createElement('div');
        name.textContent = category;
        categoryBtn.appendChild(name);
        categoryDiv.appendChild(categoryBtn);

        categoryBtn.addEventListener('click', () => {
            console.log(category);
        } );
    });
}

function populateTodoList(category, todoList) {
    let todos = document.querySelector('div.todo-list');

    let header = document.createElement('div');
    let name = document.createElement('div');
    name.textContent = category;
    header.appendChild(name);
    header.classList.add('header');
    todos.appendChild(header);

    todoList.forEach( todo => {
        let todoBtn = document.createElement('button');
        let name = document.createElement('div');
        name.textContent = todo;
        todoBtn.appendChild(name);
        todos.appendChild(todoBtn);

        todoBtn.addEventListener('click', () => {
            todos.removeChild(todoBtn);
            const index = todoList.indexOf(todo);
            if (index > -1) { // only splice array when item is found
                todoList.splice(index, 1); // 2nd parameter means remove one item only
            }
            console.log(todoList);
        } );
    });
}

export { layout, populateSidebar, populateTodoList };