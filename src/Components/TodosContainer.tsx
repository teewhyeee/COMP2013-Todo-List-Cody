//This component will have a Todo List as a prop
//Then we will map into several TodoCards

import type { TodosContainerProps } from "./TodoApp";
import TodoCard from "./TodoCard";

export default function TodosContainer({
  todosList,
  handleTodoCheck,
  handleTodoDelete,
  handleTodoEdit,
}: TodosContainerProps) {
  return (
    <div>
      {todosList.length > 0 || "Todo List is Empty"}
      {todosList.map((todo) => (
        <TodoCard
          key={todo.id}
          {...todo}
          handleTodoCheck={handleTodoCheck}
          handleTodoDelete={handleTodoDelete}
          handleTodoEdit={handleTodoEdit}
        />
      ))}
    </div>
  );
}
