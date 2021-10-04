import TodoItem from "./TodoItem";
import ClearTodo from "./ClearTodo";
import classes from "./TodoList.module.css";

function TodoList(props) {
  function handleCompleteToggle(id) {
    props.handleCompleteToggle(id);
  }

  function handleDeleteTodoItem(id) {
    props.handleDeleteTodoItem(id);
  }

  return (
    <div className={classes.container}>
      <ul>
        {props.todoListData
          .filter((todo) => todo.complete === props.filterState)
          .map((todo) => (
            <TodoItem
              key={todo.id}
              text={todo.text}
              completeToggle={handleCompleteToggle}
              id={todo.id}
              complete={todo.complete}
              handleDeleteTodoItem={handleDeleteTodoItem}
            />
          ))}
      </ul>
      <ClearTodo handleSetFilterState={props.handleSetFilterState} />
    </div>
  );
}

export default TodoList;
