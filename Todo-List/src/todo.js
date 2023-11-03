function createTodo (title, description, dueDate, isImportant) {
    let isComplete = false;
    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getImportant = () => isImportant;
    const getCompleted = () => isComplete;
    const setTitle = (newTitle) => title = newTitle;
    const setDescription = (newDescription) => description = newDescription;
    const setDueDate = (newDate) => dueDate = newDate;
    const toggleIsImportant = () => isImportant = !isImportant;
    const toggleIsComplete = () => isComplete = !isComplete;
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