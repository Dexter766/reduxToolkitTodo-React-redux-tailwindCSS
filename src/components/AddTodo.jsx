import React, { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../features/todo/todoSlice";
import { EditTodo } from "../App";

const AddTodo = () => {
  // const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const { text, setText } = useContext(EditTodo);
  const { edit, setEdit } = useContext(EditTodo);
  const { id } = useContext(EditTodo);

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Please enter a todo.");
    } else {
      if (edit) {
        dispatch(updateTodo({ id, text }));
        setEdit(!edit);
      } else {
        dispatch(addTodo(text));
      }
      setText("");
    }
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {edit ? (
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Save Todo
        </button>
      ) : (
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Add Todo
        </button>
      )}
    </form>
  );
};

export default AddTodo;
