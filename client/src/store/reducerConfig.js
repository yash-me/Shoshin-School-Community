import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import user from "./Reducers/userReducer";
import posts from './Reducers/posts';

const reducer = combineReducers({
    user,posts
});
const store = configureStore({
    reducer,
});
export default store;