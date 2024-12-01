import {TodoItem} from "./TodoItem.jsx";

export const TodoList = ({filteredAndSorted = []}) => {

    return (
        <ul>
            {
                filteredAndSorted.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                    />
                ))
            }
        </ul>
    )
}