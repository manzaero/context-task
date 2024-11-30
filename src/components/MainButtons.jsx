import styles from '../app.module.css';

export const MainButtons = ({addTodo, newTodo, sortTodos,sortState, todos}) => (
    <>
        <button
            className={styles.btn}
            onClick={addTodo}
            disabled={!newTodo}
        >Add
        </button>
        <button
            className={styles.btn}
            onClick={sortTodos}
            disabled={todos.length === 0}
        >{!sortState ? 'Sort' : 'Unsorted'}
        </button>
    </>
)