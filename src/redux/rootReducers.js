import { combineReducers } from "redux";
import { taskReducer } from "./reducers/taskReducer";

export const rootReducers = combineReducers({
    taskReducer,
})