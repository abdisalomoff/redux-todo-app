import { useDispatch, useSelector } from "react-redux";
import { filteredTodos, markAllcomplated } from "../redux/actions";

const FilterSelect = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state)=> state.filter);

  const handleFilter = (filter) =>{
    dispatch(filteredTodos(filter))
  }

  return (
    <div className="d-flex gap-3">
      <select
        className=" px-2 py-2 rounded border border-gray-300 focus:outline-none"
        value={currentFilter}
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option value="ALL">Default</option>
        <option value="COMPLETED">Completed</option>
        <option value="INCOMPLETED">Incomplete</option>
      </select>

      <button
        className="btn px-2 py-1 btn-success bg-purple-500 text-white rounded ml-2"
        onClick={() => dispatch(markAllcomplated())}
      >
        Mark All Completed
      </button>
    </div>
  );
};

export default FilterSelect;
