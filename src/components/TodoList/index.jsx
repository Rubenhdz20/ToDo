
function TodoList(props) {
    return (
      <section className="TodoList-container">
        {props.error && props.onError()}
        {props.loading && props.onLoading()}
        {(!props.loading && !props.searchedTodos.length) && props.onEmptyTodos()}
  
        <ul className="flex flex-col items-center gap-6">
          {props.searchedTodos.map(props.render)}
        </ul>
      </section>
    );
}

export default TodoList;