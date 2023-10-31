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

export { layout };