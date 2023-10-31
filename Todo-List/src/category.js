import { createTodo } from "./todo";

function createCategory (name) {
    let todoList = [];

    // Add todo
    const addTodo = (title, description, dueDate, priority) => {
        let todo = createTodo(title, description, dueDate, priority);
        todoList.push(todo); 
    }

    // Edit Todo
    const editTodo = (index, title, description, dueDate, priority, completed) => {
        let todo = todoList[index];
        todo.setTitle(title);
        todo.setDescription(description);
        todo.setDueDate(dueDate);
        todo.setPriority(priority);
        todo.setCompleted(completed);
    }

    // Remove todo
    const removeTodo = (index) => todoList.splice(index, 1);

    // Mark Todo Complete
    const markTodoComplete = (index) => {
        let todo = toodList[index];
        todo.markCompleted();
    }

    // Get List of Todos
    const getTodoList = () => todoList

    return { name, addTodo, editTodo, removeTodo, markTodoComplete, getTodoList};
}

export { createCategory };