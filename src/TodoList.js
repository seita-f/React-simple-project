import react from "react";
import Todo from "./Todo";


// TodoList Componet
const TodoList = ({ todos }) => {
  return todos.map((todo) => <Todo todo={ todo }key={todo.id} />);  {/* Calling Todo componet */}
};

export default TodoList;
