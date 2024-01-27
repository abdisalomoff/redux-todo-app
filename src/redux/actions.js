export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const MARK_COMPLATED = 'MARK_COMPLATED';
export const MARK_INCOMPLATED = 'MARK_INCOMPLATED';
export const FILTER_TODOS = 'FILTER_TODOS';
export const MARK_ALL_COMPLATED = 'MARK_ALL_COMPLATED';
export const SEARCH_TODO = "SEARCH_TODO"

export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        payload: task,
    };
};

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: id
    }
}

export const deleteTodo = (id) =>{
    return{
        type: DELETE_TODO,
        payload: id
    }
}

export const markComplated = (id) =>{
    return{
        type: MARK_COMPLATED,
        payload: id
    }
}

export const markIncomplated = (id) =>{
    return{
        type: MARK_INCOMPLATED,
        payload: id
    }
}

export const filteredTodos = (filter) =>{
    return{
        type: FILTER_TODOS,
        payload: filter
    }
}

export const markAllcomplated = () =>{
    return{
        type: MARK_ALL_COMPLATED,
    }
}

export const searchTodos = (search) =>{
    return{
        type: SEARCH_TODO,
        payload: search
    }
}