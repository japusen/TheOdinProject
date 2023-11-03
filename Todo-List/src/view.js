import { importantButton, completedButton, deleteButton, addTodoButton } from "./components";

function constructPageLayout() {
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
        let categoryBtn = categoryButton(category);
        categoryDiv.appendChild(categoryBtn);
    });
}

function categoryButton(category) {
    let button = document.createElement('button');
    let name = document.createElement('div');
    name.textContent = category.name;
    button.appendChild(name);

    button.addEventListener('click', () => {
        populateTodoList(category);
    });

    return button;
}

function populateTodoList(category) {
    let todos = document.querySelector('div.todo-list');
    todos.textContent = '';

    let header = document.createElement('div');
    todos.appendChild(header);

    let nameDiv = document.createElement('div');
    nameDiv.textContent = category.name;
    header.appendChild(nameDiv);
    header.classList.add('header');

    let addButton = addTodoButton(); // TODO function
    header.appendChild(addButton);

    category.getTodoList().forEach( todo => {
        displayTodo(todo, category.removeTodo);
    });
}

function displayTodo(todo, removeTodo) {
    let todos = document.querySelector('div.todo-list');

    let todoBtn = document.createElement('button');
    todoBtn.classList.add('todo-item');
    todos.appendChild(todoBtn);

    let completedBtn = completedButton(todo.getCompleted(), todo.toggleIsComplete);
    todoBtn.appendChild(completedBtn);

    let nameContainer = document.createElement('div');
    nameContainer.classList.add('name');
    todoBtn.appendChild(nameContainer);

    let name = document.createElement('div');
    name.textContent = todo.getTitle();
    nameContainer.appendChild(name);
    
    let importantBtn = importantButton(todo.getImportant(), todo.toggleIsImportant);
    todoBtn.appendChild(importantBtn);

    let onDeleteBtnClicked = () => {
        removeTodo(todo);
        todos.removeChild(todoBtn);
    }
    let deleteBtn = deleteButton(onDeleteBtnClicked);
    todoBtn.appendChild(deleteBtn);
}

export { constructPageLayout, populateSidebar, populateTodoList };