import React, { useEffect } from "react";
import TodoCard from "../TodoCard/TodoCard";
import { useSelector } from "react-redux";

export default function TodoList() {
  const todo = useSelector((state) => state.todo.todo);
  useEffect(() => {
    console.log(todo);
  }, []);
  return (
    <div className="mt-[30px] flex justify-center flex-wrap gap-[15px]">
      {todo.map((item) => (
        <TodoCard
          task={item.task}
          id={item.id}
          completed={item.completed}
          key={item.id}
        />
      ))}
    </div>
  );
}
