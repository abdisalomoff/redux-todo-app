import { useDispatch, useSelector } from 'react-redux'
import { FaToggleOn, FaToggleOff, FaCheck, FaTimes, FaTrash  } from "react-icons/fa";
import { deleteTodo, markComplated, markIncomplated, toggleTodo } from '../redux/actions';

const TodoList = () => {

    const dispatch = useDispatch()

    const filterTodos = useSelector((state)=> {
        const todos = state.todos;
        const filter = state.filter;
        const searchTodo =  state.searchTodo.toLowerCase();

        return todos.filter((todo) => {
            const matchesFilter = (filter === 'COMPLETED' && todo.completed) ||
              (filter === 'INCOMPLETE' && !todo.completed) ||
              filter === 'ALL';
      
            const matchesSearch = todo.text?.toLowerCase().includes(searchTodo);
      
            return matchesFilter && matchesSearch;
          });
        });

    console.log(filterTodos);
  return (
    <div className='mt-3'>
        <h4>TodoList</h4>
        <ul className='p-0'>
            {filterTodos.map((todo, index)=>(
                <li key={index} className='d-flex gap-1 border-bottom'>
                    <span>{index + 1}. </span>
                    <p className={`${todo.completed ? "text-decoration-line-through": ""}`}>{todo.text}</p>
                    {/* <p>{todo.completed}</p> */}
                    <button onClick={()=> dispatch(toggleTodo(index))} className='btn p-0 ms-auto'>{todo.completed ? <FaToggleOff size={25}/> : <FaToggleOn size={25}/>}</button>
                    <button onClick={()=> dispatch(deleteTodo(index))} className='btn p-0 ms-3'><FaTrash/></button>
  
                </li>
            ))}
        </ul>
    </div>
  )
}

export default TodoList