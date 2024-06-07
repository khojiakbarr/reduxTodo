import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../../Store/TodoThunks/TodoThunks";

export default function TodoCard({ id, task }) {
  const [state, setState] = useState({
    isEdit: false,
    inputTask: task,
  });
  const dispatch = useDispatch();

  function saveUpdate() {
    dispatch(updateTodo({ id: id, newTask: state.inputTask }));
    setState({ ...state, isEdit: false });
  }
  return (
    // line-through
    <div className=" border-purple-600 border-[1px] p-[12px] rounded-[10px] ">
      {state.isEdit ? (
        <div className="flex flex-col">
          <input
            className="border-[1px] border-black px-[5px] py-[5px] rounded-[5px]"
            type="text"
            value={state.inputTask}
            onChange={(e) => setState({ ...state, inputTask: e.target.value })}
          />
          <button
            onClick={() => saveUpdate()}
            className="bg-purple-600 py-[5px] px-[10px] w-full  rounded-[10px] mt-[10px] text-white font-[600]"
          >
            Save
          </button>
        </div>
      ) : (
        <h2 className={`text-center text-[22px] `}>{task}</h2>
      )}
      <div className="flex gap-[10px] w-full">
        <button
          onClick={() => setState({ ...state, isEdit: !state.isEdit })}
          className="bg-purple-600 py-[5px] px-[10px] w-full  rounded-[10px] mt-[10px] text-white font-[600] "
        >
          Edit
        </button>
        <button
          onClick={() => dispatch(deleteTodo(id))}
          className="bg-purple-600 py-[5px] w-full px-[10px] rounded-[10px] mt-[10px] text-white font-[600] "
        >
          Delete
        </button>
      </div>
    </div>
  );
}
