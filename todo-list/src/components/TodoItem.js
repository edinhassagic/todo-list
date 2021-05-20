const TodoItem = ({ todos, deletetodo }) => {
  return todos.map((todo) => (
    <div key={todo.id} onClick={() => deletetodo(todo.id)}>{todo.todo}
    </div>
  ));
};
export default TodoItem;
