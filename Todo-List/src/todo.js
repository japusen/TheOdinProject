function createTodo (title, description, dueDate, priority) {
    let todo = { title, description, dueDate, priority, completed: false }
    const getTitle = todo.title;
    const getDescription = todo.description;
    const getDueDate = todo.dueDate;
    const getPriority = todo.priority;
    const getCompleted = todo.completed;
    const setTitle = (title) => todo.title = title;
    const setDescription = (description) => todo.description = description;
    const setDueDate = (date) => todo.dueDate = date;
    const setPriority = (priority) => todo.priority = priority;
    const markCompleted = (completed) => todo.completed = completed;

    return { 
        getTitle, getDescription, getDueDate, getPriority, getCompleted,
        setTitle, setDescription, setDueDate, setPriority, markCompleted
    };
}

export { createTodo };