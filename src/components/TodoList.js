import react from "react";
import Todo from "./Todo";


// TodoList Componet
const TodoList = ({ todos, toggleTodo}) => {
  return todos.map((todo) => <Todo todo={ todo } key={todo.id} toggleTodo={toggleTodo}/>);  {/* Calling Todo componet */}
};

export default TodoList;
