"use client";
import {
  INITIALINPUTS,
  formReducer,
} from "@/lib/reducers/form-reducer/formReducer";
import { FORM_INPUT_PROPS } from "@/lib/reducers/form-reducer/formReducerActionProps";
import Button from "@/modules/button";
import DateInput from "@/modules/date-input";
import Input from "@/modules/input";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import React, { ChangeEvent, useReducer, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TodoCard from "@/modules/todo-card";
import { useTodo } from "@/lib/contexts/todoContext";

const HomePage = () => {
  const [state, dispatch] = useReducer(formReducer, INITIALINPUTS);
  const [sortBy, setSortBy] = useState<string>("");
  const { addTodo, state: data, sortTodoByDate, sortTodoByLetter } = useTodo();

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FORM_INPUT_PROPS.INPUT_CHANGE,
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleSortBy = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
    if (e.target.value === "Sort By Letter") {
      sortTodoByLetter();
    } else if (e.target.value === "Sort By Date") {
      sortTodoByDate();
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center w border-solid border-sky-400 border shadow-md mb-2">
        <div className="flex justify-center">
          <img src="/logo.png" alt="" height="100px" width="150px" />
        </div>
        <h3 className="font-semibold text-lg mt-4 text-center mb-7">
          Add To-Do
        </h3>
        <div className="flex justify-center mb-7">
          <div className="mr-2 mt-[1.25px]">
            <Input
              type="text"
              placeholder="Task Name"
              name="task"
              value={state.task}
              onChange={(e) => handleInput(e)}
            />
          </div>
          <div className="mr-2">
            <DateInput
              name="date"
              value={state.date}
              onChange={(e) => handleInput(e)}
            />
          </div>
          <div className="mr-2">
            <Button
              variant="primary"
              onClick={() => addTodo(state.task, state.date)}
            >
              <FontAwesomeIcon icon={faPlus} />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center w border-solid border-teal-400 border shadow-md mb-2">
        <h3 className="font-semibold text-lg mt-4 text-center mb-7">
          To-Do List
        </h3>
        {data.length > 0 && (
          <div className="flex justify-center mb-3">
            <select
              value={sortBy}
              onChange={(e) => handleSortBy(e)}
              className="p-2 border-solid border-blue-400 border rounded-md text-sm"
              disabled={data.length === 1}
            >
              <option value="">Sort By</option>
              <option value="Sort By Letter">Sort By Letter</option>
              <option value="Sort By Date">Sort By Date</option>
            </select>
          </div>
        )}

        {data && data.map((item: any) => <TodoCard key={item.id} {...item} />)}
      </div>
    </>
  );
};

export default HomePage;
