import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteTodo,
  editTodo,
  isCompleted,
} from "../../Store/Slices/TodoSlice";

export default function TodoCard({ task, id, completed }) {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    ifComplated: completed,
    isEditing: false,
  });

  const [inputValue, setInputValue] = useState({
    input: task,
  });

  function onChacked(e) {
    setState({ ...state, ifComplated: e.target.checked });
    console.log(e.target.checked);
    dispatch(isCompleted({ id }));
  }

  function saveInputValue() {
    setState({ ...state, isEditing: false });
    dispatch(editTodo({ id: id, newTask: inputValue.input }));
  }
  return (
    // line-through
    <div className=" border-purple-600 border-[1px] p-[12px] rounded-[10px] ">
      {state.isEditing ? (
        <div className="flex flex-col">
          <input
            type="text"
            className="border-purple-600 border-[1px] rounded-[10px] px-[7px] py-[5px]"
            value={inputValue.input}
            onChange={(e) =>
              setInputValue({ ...inputValue, input: e.target.value })
            }
          />
          <button
            onClick={() => saveInputValue()}
            className="bg-purple-600 py-[5px] px-[10px]  rounded-[10px] mt-[10px] text-white font-[600]"
          >
            Save
          </button>
        </div>
      ) : (
        <h2
          className={`text-center text-[22px] ${
            state.ifComplated && "line-through"
          }`}
        >
          {task}{" "}
          <input
            defaultChecked={state.ifComplated}
            onChange={(e) => onChacked(e)}
            type="checkbox"
          />
        </h2>
      )}
      <div className="flex gap-[10px] w-full">
        <button
          onClick={() => setState({ isEditing: !state.isEditing })}
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
