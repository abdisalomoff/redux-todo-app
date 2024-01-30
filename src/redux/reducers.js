import {
    ADD_TODO, DELETE_TODO, FILTER_TODOS, MARK_ALL_COMPLATED, MARK_COMPLATED, MARK_INCOMPLATED, SEARCH_TODO, TOGGLE_TODO
} from "../redux/actions";

const initialState = {
    todos: [],
    filter: "ALL",
    searchTodo: ""
};

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return{
                todos: [...state.todos, {text: action.payload.text, completed: false}],
                filter: state.filter,
                searchTodo: state.searchTodo,
            };

        case TOGGLE_TODO:
            return {
                todos: state.todos.map((todo, index)=>
                    index === action.payload.id ? {...todo, completed: !todo.completed} : todo
                ),
                filter: state.filter,
                searchTodo: state.searchTodo,
            };

        case DELETE_TODO:
            return {
                todos: state.todos.filter((todo, index)=>{
                    index !== action.payload.id
                }),
                filter: state.filter,
                searchTodo: state.searchTodo,
            };
        
        case MARK_COMPLATED:
            return{
                todos: state.todos.map((todo, index)=>{
                    index === action.payload.id ? {...todo, completed: true} : todo
                }),
                filter: state.filter,
                searchTodo: state.searchTodo,
            }

        
        case MARK_INCOMPLATED:
            return{
                    todos: state.todos.map((todo, index)=>{
                        index === action.payload.id ? {...todo, completed: false} : todo
                    }),
                    filter: state.filter,
                    searchTodo: state.searchTodo,
                }
        
        case FILTER_TODOS:
            return{
                todos: state.todos,
                filter: action.payload.filter,
                searchTodo: state.searchTodo,
            }

        case SEARCH_TODO:
            return{
                    todos: state.todos,
                    filter: state.filter,
                    searchTodo: action.payload.searchTodo,
                }

        case MARK_ALL_COMPLATED:
            return{
                    todos: state.todos.map((todo)=> ({...todo, completed: true})),
                    filter: state.filter,
                    searchTodo: state.searchTodo,
                }
    
        default:
            return state;
    }
}