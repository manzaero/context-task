
import {TodoItem} from "./TodoItem.jsx";

export const TodoList = ({todos = [], updateTodos, deleteTodo}) => {

    return (
        <ul>
            {
                todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        updateTodos={updateTodos}
                        deleteTodo={deleteTodo}
                    />
                ))
            }
        </ul>
    )
}