//This component will contain
//1. a body for title of the todo message
//2. a button for deleting this todo list
//3. a button to edit this todo list
//4. check box that will be used to check item for list if completed

import type { TodoCardFunctions } from "./TodoApp";

export default function TodoCard({
  id,
  checked,
  title,
  handleTodoCheck,
  handleTodoDelete,
  handleTodoEdit,
}: TodoCardFunctions) {
  return (
    <div>
      <input
        type="checkbox"
        name="checked"
        id="checked"
        checked={checked}
        onChange={(e) => handleTodoCheck(e, id)}
      />
      <span>{title}</span>
      <button onClick={() => handleTodoDelete(id)}>Delete</button>
      <button onClick={() => handleTodoEdit(id)}>Edit</button>
    </div>
  );
}
