function toggleIconButton(boolean, toggleFunction, trueIconName, falseIconName) {
    let button = document.createElement('button');
    button.classList.add('toggle');
    button.classList.add(trueIconName);

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

    button.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFunction();
        trueIcon.classList.toggle('hidden');
        falseIcon.classList.toggle('hidden');
    });

    return button;
}

function actionIconButton(iconName, actionFunction) {
    let button = document.createElement('button');
    button.classList.add('toggle');
    button.classList.add(iconName);

    let icon = document.createElement('span');
    icon.classList.add('material-icons-outlined');
    icon.classList.add(iconName);
    icon.textContent = iconName;
    button.appendChild(icon);

    button.addEventListener('click', actionFunction);

    return button;
}

function importantButton(isImportant, toggleFunction) {
    return toggleIconButton(
        isImportant, 
        toggleFunction, 
        'star', 
        'star_outlined'
    );
}

function completedButton(isComplete, toggleFunction) {
    return toggleIconButton(
        isComplete, 
        toggleFunction, 
        'check_box', 
        'check_box_outline_blank'
    );
}

function deleteButton(deleteFunction) {
    return actionIconButton('delete', deleteFunction);
}

function addTodoButton(addFunction) {
    return actionIconButton('add_circle_outlined', addFunction);
}

function todoInfo(title, completed, important, toggleIsComplete, toggleIsImportant, remove) {
    let div = document.createElement('div');
    div.classList.add('todo-info');
    
    let completedBtn = completedButton(completed, toggleIsComplete);
    div.appendChild(completedBtn);

    let nameContainer = document.createElement('div');
    nameContainer.classList.add('name');
    div.appendChild(nameContainer);

    let name = document.createElement('div');
    name.textContent = title;
    nameContainer.appendChild(name);
    
    let importantBtn = importantButton(important, toggleIsImportant);
    div.appendChild(importantBtn);

    let deleteBtn = deleteButton(remove);
    div.appendChild(deleteBtn);

    return div;
}

function todoEdit(title, description, date, updateTodo) {
    let form = document.createElement('form');
    form.classList.add('todo-edit', 'hidden');
    form.textContent = 'hello';

    return form;
}

export { todoInfo, todoEdit, addTodoButton };