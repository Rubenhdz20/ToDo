
function TodoList(props) {
    const renderFunc = props.children || props.render;

    return (
      <section className="TodoList-container">
        {props.error && props.onError()}
        {props.loading && props.onLoading()}
        {(!props.loading && !props.searchedTodos.length) && props.onEmptyTodos()}
        {(!!props.allTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}
        <ul className="flex flex-col items-center gap-6">
          {props.searchedTodos.map(renderFunc)}
        </ul>
      </section>
    );
}

export default TodoList;