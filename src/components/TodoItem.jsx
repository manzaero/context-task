import styles from "../app.module.css";
import PropTypes from "prop-types";

export const TodoItem = ({todo, updateTodos, deleteTodo}) => (
    <div className={styles.flex}>
        <li>{todo.title}</li>
        <button className={styles.btn} onClick={() => updateTodos(todo.id)}>Update</button>
        <button className={styles.btn} onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
)
TodoItem.propTypes = {
    title: PropTypes.string,
    id: PropTypes.number,
}