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
        let categoryBtn = displayCategory(category);
        categoryDiv.appendChild(categoryBtn);
    });
}

function displayCategory(category) {
    let button = document.createElement('button');
    let name = document.createElement('div');
    name.textContent = category.name;
    button.appendChild(name);

    button.addEventListener('click', () => {
        populateTodoList(category.name, category.getTodoList(), category.removeTodo);
    });

    return button;
}

function populateTodoList(name, todoList, removeTodo) {
    let todos = document.querySelector('div.todo-list');
    todos.textContent = '';

    let header = document.createElement('div');
    let nameDiv = document.createElement('div');
    nameDiv.textContent = name;
    header.appendChild(nameDiv);
    header.classList.add('header');
    todos.appendChild(header);

    todoList.forEach( todo => {
        displayTodo(todo, removeTodo);
    });
}

function displayTodo(todo, removeTodo) {
    let todos = document.querySelector('div.todo-list');

    let todoBtn = document.createElement('button');
    todoBtn.classList.add('todo-item');
    todos.appendChild(todoBtn);

    let completedBtn = completedButton(todo.getCompleted, todo.toggleIsComplete);
    todoBtn.appendChild(completedBtn);

    let name = document.createElement('div');
    name.textContent = todo.getTitle;
    todoBtn.appendChild(name);
    
    let importantBtn = importantButton(todo.getImportant, todo.toggleIsImportant);
    todoBtn.appendChild(importantBtn);

    let remove = () => {
        removeTodo(todo);
        todos.removeChild(todoBtn);
    }
    let deleteBtn = deleteButton(remove);
    todoBtn.appendChild(deleteBtn);
}

function importantButton(isImportant, toggleFunction) {
    return toggleButton(
        isImportant, 
        toggleFunction, 
        'star', 
        'star_outlined'
    );
}

function completedButton(isComplete, toggleFunction) {
    return toggleButton(
        isComplete, 
        toggleFunction, 
        'check_box', 
        'check_box_outline_blank'
    );
}

function deleteButton(deleteFunction) {
    return singleActionButton('delete', deleteFunction);
}

function toggleButton(boolean, toggleFunction, trueIconName, falseIconName) {
    let button = document.createElement('button');
    button.classList.add('toggle');

    let trueIcon = document.createElement('span');
    trueIcon.classList.add('material-icons-outlined');
    trueIcon.classList.add(trueIconName);
    trueIcon.textContent = trueIconName;
    button.appendChild(trueIcon);

    let falseIcon = document.createElement('span');
    falseIcon.classList.add('material-icons-outlined');
    falseIcon.classList.add(trueIconName);
    falseIcon.textContent = falseIconName;
    button.appendChild(falseIcon);

    (boolean) ? falseIcon.classList.add('hidden') :
                trueIcon.classList.add('hidden');

    button.addEventListener('click', () => {
        toggleFunction();
        trueIcon.classList.toggle('hidden');
        falseIcon.classList.toggle('hidden');
    });

    return button;
}

function singleActionButton(iconName, actionFunction) {
    let button = document.createElement('button');
    button.classList.add('toggle');

    let icon = document.createElement('span');
    icon.classList.add('material-icons-outlined');
    icon.classList.add(iconName);
    icon.textContent = iconName;
    button.appendChild(icon);

    button.addEventListener('click', actionFunction);

    return button;
}

export { layout, populateSidebar };