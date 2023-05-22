import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import {postReducer} from "./reducers/postsReducer";
import {categoryReducer} from "./reducers/CategoryReducer";
import {userReducer} from "./reducers/UserReducer";

const rootReducer = combineReducers({
    posts: postReducer,
    categories: categoryReducer,
    user: userReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))