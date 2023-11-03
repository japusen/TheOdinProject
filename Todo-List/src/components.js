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

    button.addEventListener('click', () => {
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
    return actionIconButton('add_box', addFunction);
}

export { importantButton, completedButton, deleteButton, addTodoButton };