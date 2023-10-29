import { createTodo } from "./todo";

function createCategory (name) {
    let todoList = [];

    // Add todo
    const addTodo = (title, description, dueDate, priority) => {
        let todo = createTodo(title, description, dueDate, priority);
        todoList.push(todo); 
    }

    // Edit Todo
    const editTodo = (index) => {
        let todo = todoList[index];
        
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

    return { name, addTodo, removeTodo, markTodoComplete, getTodoList};
}

export { createCategory };