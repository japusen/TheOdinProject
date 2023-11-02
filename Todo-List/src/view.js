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

function populateTodoList(category) {
    let todoList = category.getTodoList();
    let todos = document.querySelector('div.todo-list');

    let header = document.createElement('div');
    let name = document.createElement('div');
    name.textContent = category.name;
    header.appendChild(name);
    header.classList.add('header');
    todos.appendChild(header);

    todoList.forEach( todo => {
        displayTodo(todo);
    });
}

function displayTodo(todo) {
    let todos = document.querySelector('div.todo-list');

    let todoBtn = document.createElement('button');

    let completedBtn = completedButton(todo.getCompleted, todo.toggleIsComplete);
    todoBtn.appendChild(completedBtn);

    let name = document.createElement('div');
    name.textContent = todo.getTitle;
    todoBtn.appendChild(name);
    todos.appendChild(todoBtn);

    let importantIconBtn = importantButton(todo.getImportant, todo.toggleIsImportant);
    todoBtn.appendChild(importantIconBtn);
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

export { layout, populateSidebar, populateTodoList };