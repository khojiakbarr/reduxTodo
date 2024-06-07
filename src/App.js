import { useDispatch } from "react-redux";
import "./App.css";

import { useForm } from "react-hook-form";
import TodoList from "./components/TodoList/TodoList";
import { postTodos } from "./Store/TodoThunks/TodoThunks";

function App() {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  const onSubmitForm = (data) => {
    dispatch(postTodos(data));
    reset();
  };

  return (
    <div className="flex justify-center flex-col items-center">
      <div>
        <img src="https://www.theconsolelogs.com/react/redux.svg" />
        <h1 className="text-center mb-[30px] text-[40px] ">Todo App</h1>
      </div>

      <form
        onSubmit={handleSubmit((data) => onSubmitForm(data))}
        className="m-w-[400px] flex flex-col "
      >
        <input
          className="text-[24px] rounded-[10px] border-[1px] border-[#000] px-[10px] py-[5px] outline-none"
          type="text"
          placeholder="Enter Task"
          required
          {...register("task")}
        />
        <button className="bg-purple-600 py-[10px] rounded-[10px] mt-[10px] text-white font-[600]">
          Add Todo
        </button>
      </form>
      <TodoList />
    </div>
  );
}

export default App;
