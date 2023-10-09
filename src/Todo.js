import react from "react";


// Todo component
const Todo = ({ todo }) => {
  return (
    <div>
      <label>
        <input type="checkbox" checked={true} readOnly />
      </label>
      {todo.name}
    </div>
  );
};

export default Todo;
