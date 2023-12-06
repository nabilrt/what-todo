import { createContext, useContext, useReducer } from "react";
import { todoReducer } from "../reducers/todo-reducer/todoReducer";
import { TODO_ACTION_PROPS } from "../reducers/todo-reducer/todoReducerActionProps";

type TodoProps = {
  id: number;
  task: string;
  date: string;
  isCompleted: boolean;
};

type TodoContextProps = {
  state: TodoProps[];
  addTodo: (task: string, date: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  sortTodoByLetter: () => void;
  sortTodoByDate: () => void;
};

export const TodoProvider = createContext<TodoContextProps | null>(null);

export const TodoContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(todoReducer, []);
  const addTodo = (task: string, date: string) => {
    const newTodo = {
      id: state.length + 1, // Generate a unique id based on the array length
      task: task,
      date: date,
      isCompleted: false,
    };

    dispatch({
      type: TODO_ACTION_PROPS.ADD,
      payload: newTodo,
    });
  };

  const toggleTodo = (id: number) => {
    dispatch({
      type: TODO_ACTION_PROPS.TOGGLE,
      payload: id,
    });
  };

  const deleteTodo = (id: number) => {
    dispatch({
      type: TODO_ACTION_PROPS.DELETE,
      payload: id,
    });
  };

  const sortTodoByLetter = () => {
    dispatch({
      type: TODO_ACTION_PROPS.SORT_BY_LETTER,
    });
  };

  const sortTodoByDate = () => {
    dispatch({
      type: TODO_ACTION_PROPS.SORT_BY_DATE,
    });
  };

  return (
    <TodoProvider.Provider
      value={{
        state,
        addTodo,
        toggleTodo,
        deleteTodo,
        sortTodoByLetter,
        sortTodoByDate,
      }}
    >
      {children}
    </TodoProvider.Provider>
  );
};

export const useTodo = () => {
  const context = useContext(TodoProvider);
  if (context === null) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
};
