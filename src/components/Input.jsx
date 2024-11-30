import styles from "../app.module.css";

export const Input = ({ searchTitle, searchHandler, newTodo, setTodo }) => (
        <>
            <input type="text"
                   placeholder="Search..."
                   className={styles.searchInput}
                   value={searchTitle}
                   onChange={(e) => searchHandler(e.target.value)}
            />
            <input type="text"
                   className={styles.addTodo}
                   placeholder="Add Todo"
                   value={newTodo}
                   onChange={(e) => setTodo(e.target.value)}
            />
        </>
)