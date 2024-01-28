import { useState } from "react";
import { BsPlus, BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

const TodoForm = () => {
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState('');

  const handleAddTodo = (text) =>{
    dispatch(addTodo(text));
  }

  const handleAddTodoClick = ()=>{
    if (newTodoText.trim() !== ""){
      
    }
  }
  // console.log(newTodoText);

  return (
    <div className="container p-4 bg-light rounded mt-5">
      <h2 className="text-center text-uppercase">Personal TODO APP</h2>

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
          // onClick={handleAddTodoClick}
        >
          <BsPlus size={20} />
        </button>
      </div>

        {/* <FilterButtons /> */}

        <div className="d-flex align-items-center mb-4 gap-3">
          <input
            className="form-control p-2 px-3"
            type="text"
            placeholder="Search Todos"
            // value={searchTerm}
            // onChange={(e) => handleSearchChange(e.target.value)}
          />
          <button className="btn p-2 bg-primary text-white rounded">
            <BsSearch size={20} />
          </button>
        </div>

      {/* <TodoList /> */}
    </div>
  );
};

export default TodoForm;
