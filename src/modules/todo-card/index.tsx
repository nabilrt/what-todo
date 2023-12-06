import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../button";
import {
  faCheck,
  faCircleXmark,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useTodo } from "@/lib/contexts/todoContext";

type TodoItemProps = {
  id: number;
  task: string;
  date: string;
  isCompleted: boolean;
};

const TodoCard = (todoItem: TodoItemProps) => {
  const { toggleTodo, deleteTodo } = useTodo();
  return (
    <div className="flex justify-center items-center w-full   rounded-md m-1">
      <div className="flex flex-wrap justify-between space-x-6">
        {todoItem.isCompleted ? (
          <div className="flex line-through space-x-6">
            <div className="font-semibold text-lg">{todoItem.task}</div>
            <div className="text-sm text-gray-400 mt-1">{todoItem.date}</div>
          </div>
        ) : (
          <>
            <div className="font-semibold text-lg">{todoItem.task}</div>
            <div className="text-sm text-gray-400 mt-1">{todoItem.date}</div>
          </>
        )}

        <div className="flex mb-4  space-x-3">
          {todoItem.isCompleted ? (
            <Button variant="warning" onClick={() => toggleTodo(todoItem.id)}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </Button>
          ) : (
            <Button variant="success" onClick={() => toggleTodo(todoItem.id)}>
              <FontAwesomeIcon icon={faCheck} />
            </Button>
          )}

          <Button variant="danger" onClick={()=>deleteTodo(todoItem.id)}>
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
