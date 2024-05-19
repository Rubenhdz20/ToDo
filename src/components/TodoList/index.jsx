
function TodoList({ children }) {
    return(
        <ul className="flex flex-col items-center gap-6">
            {children}
        </ul>
    )
}

export default TodoList;