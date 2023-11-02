function createTodo (title, description, dueDate, isImportant) {
    let todo = { title, description, dueDate, isImportant, isComplete: false }
    const getTitle = todo.title;
    const getDescription = todo.description;
    const getDueDate = todo.dueDate;
    const getImportant = todo.isImportant;
    const getCompleted = todo.isComplete;
    const setTitle = (title) => todo.title = title;
    const setDescription = (description) => todo.description = description;
    const setDueDate = (date) => todo.dueDate = date;
    const toggleIsImportant = () => {
        todo.isImportant = !todo.isImportant;
    }
    const toggleIsComplete = () => {
        todo.isComplete = !todo.isComplete;
    }
    const update = (title, description, date) => {
        setTitle(title);
        setDescription(description);
        setDueDate(date);        
    }

    return { 
        getTitle, getDescription, getDueDate, getImportant, getCompleted,
        toggleIsImportant, toggleIsComplete, update
    };
}

export { createTodo };