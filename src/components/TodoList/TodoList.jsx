import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../../Store/TodoThunks/TodoThunks";
import TodoCard from "../TodoCard/TodoCard";

export default function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const loading = useSelector((state) => state.todo.loading);
  const error = useSelector((state) => state.todo.error);

  useEffect(() => {
    dispatch(getTodos());
    console.log(todos);
  }, []);
  return (
    <div className="mt-[30px] flex justify-center flex-wrap gap-[15px]">
      {loading === "pending" && <h2>Loading...</h2>}
      {error && <h2>Error: {error} </h2>}
      {todos &&
        todos.map((todo) => (
          <TodoCard id={todo._id} task={todo.task} key={todo._id} />
        ))}
    </div>
  );
}
