import { createTodo } from "./todo";

function createCategory (name) {
    let todoList = [];

    // Add todo
    const addTodo = (title, description, dueDate, priority) => {
        let todo = createTodo(title, description, dueDate, priority);
        todoList.push(todo); 
    }

    // Remove todo
    const removeTodo = (todo) => {
        const index = todoList.indexOf(todo);
        if (index > -1) { // only splice array when item is found
            todoList.splice(index, 1); // 2nd parameter means remove one item only
        }
    }

    const toggleIsComplete = (todo) => {
        const index = todoList.indexOf(todo);
        if (index > -1) {
            todo.toggleIsComplete();
        }
    }

    // Get List of Todos
    const getTodoList = () => todoList

    return { name, addTodo, removeTodo, toggleIsComplete, getTodoList};
}

export { createCategory };