import { ToDoItem } from "./ToDoItem";

export default function ToDoList({ completed, todos,toggleTodo, deleteTodo }) {
    let checkedBoxes = document.querySelectorAll("input:checked")
    
    return (
        <div>
            <ul className="list">
            {todos.length === 0 && "No items in your reading list yet. Add one to start tracking!"}

            {todos.map((todo) => {
            return (
            <ToDoItem
                {...todo}
                key={todo.id}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
            />
            );
            })}
            </ul>

            {todos.length !== 0 && <p>You have {todos.length - checkedBoxes.length} books pending!</p>}
        
        </div>
    );
}
