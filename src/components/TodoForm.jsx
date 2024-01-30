import { useState } from "react";
import { BsPlus, BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, searchTodos } from "../redux/actions";
import FilterSelect from "./FilterSelect";
import TodoList from "./TodoList";

const TodoForm = () => {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState("");
  const [searchTodo, setSearchTodo] = useState("");

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const handleAddTodoClick = () => {
    if (newTodoText.trim() !== "") {
      handleAddTodo(newTodoText.trim())
      setNewTodoText("");
    }
  };
  // console.log(newTodoText);

  const handleSearchChange = (value) => {
    setSearchTodo(value);
    dispatch(searchTodos(value));
  };

  return (
    <div className="container p-4 bg-light rounded mt-5">
      <h2 className="text-center text-uppercase">TODO APP</h2>

      <div className="d-flex align-items-center mb-4 gap-3">
        <input
          id="addTodoInput"
          className="form-control p-2 px-3"
          type="text"
          placeholder="Add Todo"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <button
          className=" btn p-2 bg-primary text-white rounded"
          onClick={handleAddTodoClick}
        >
          <BsPlus size={20} />
        </button>
      </div>

      <div className="d-flex align-items-center justify-content-between">
        <FilterSelect />

        <div className="d-flex align-items-center gap-3">
          <input
            className="form-control p-2 px-3 w-100"
            type="text"
            placeholder="Search Todos"
            value={searchTodo}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
          <button
            className="btn p-2 bg-primary text-white rounded"
            onClick={handleSearchChange}
          >
            <BsSearch size={20} />
          </button>
        </div>
      </div>

      <TodoList/>
    </div>
  );
};

export default TodoForm;
