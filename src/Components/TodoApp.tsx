import { useState, type ChangeEvent, type SubmitEvent } from "react";
import FormComponent from "./FormComponent";
import TodosContainer from "./TodosContainer";

export interface TodoCardProps {
  id: string;
  title: string;
  checked: boolean;
}

export interface TodoCardFunctions extends TodoCardProps {
  handleTodoCheck: (e: ChangeEvent<HTMLInputElement>, id: string) => void;
  handleTodoDelete: (id: string) => void;
  handleTodoEdit: (id: string) => void;
}

export interface TodosContainerProps {
  todosList: TodoCardProps[];
  handleTodoCheck: (e: ChangeEvent<HTMLInputElement>, id: string) => void;
  handleTodoDelete: (id: string) => void;
  handleTodoEdit: (id: string) => void;
}

export interface FormComponentProps extends TodoCardProps {
  handleFormOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOnSubmit: (e: SubmitEvent<HTMLFormElement>) => void;
}

export default function TodoApp() {
  //States
  //state to store input change
  //once submit button is clicked, the state will be stored
  //as a todo entry in other state will save list todos

  const [todo, setTodo] = useState<TodoCardProps>({
    id: "",
    title: "",
    checked: false,
  });

  //Second state: state to store all the todos entry in one array

  const [todosList, setTodoList] = useState<TodoCardProps[]>([]);

  //Handlers

  //1. handle form input change that will allow typing in input
  const handleFormOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo((prevTodo) => ({ ...prevTodo, [e.target.name]: e.target.value }));
  };

  //2. handle onSubmit event for form to add input to todo list
  const handleOnSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault(); //to prevent the default refresh action from submitting form
    if (todo.id === "") {
      setTodoList((prevList) => [
        ...prevList,
        {
          id: crypto.randomUUID(),
          title: todo.title,
          checked: false,
        },
      ]);
    } else {
      setTodoList((prevList) =>
        prevList.map((entry) =>
          entry.id === todo.id ? { ...entry, title: todo.title } : { ...entry },
        ),
      );
    }

    setTodo({
      id: "",
      title: "",
      checked: false,
    });
  };

  //3. Handle checkbox toggle in Todo Card
  const handleTodoCheck = (e: ChangeEvent<HTMLInputElement>, id: string) => {
    setTodoList((prevList) =>
      prevList.map((entry) =>
        entry.id === id
          ? { ...entry, checked: e.target.checked }
          : { ...entry },
      ),
    );
  };

  //4. handle deleting an entry using the delete button
  const handleTodoDelete = (id: string) => {
    setTodoList((prevList) => prevList.filter((entry) => entry.id !== id));
  };

  //5. handle editing an entry to change the title
  const handleTodoEdit = (id: string) => {
    const todoEntry = todosList.find((entry) => entry.id === id) || {
      title: "",
      id: "",
      checked: false,
    };
    setTodo({ ...todoEntry });
  };

  //Main return
  return (
    <div>
      <h1>Todo List App</h1>
      <FormComponent
        {...todo}
        handleFormOnChange={handleFormOnChange}
        handleOnSubmit={handleOnSubmit}
      />
      <TodosContainer
        todosList={todosList}
        handleTodoCheck={handleTodoCheck}
        handleTodoDelete={handleTodoDelete}
        handleTodoEdit={handleTodoEdit}
      />
    </div>
  );
}
