import {applyMiddleware,combineReducers,createStore} from 'redux'
import thunk from 'redux-thunk'
import NewsReducer, {InitialNewsStateType} from "./reducers/NewsReducer";

export interface stateType{
    News:InitialNewsStateType
}

let state = createStore(
    combineReducers({
        News:NewsReducer
        }
    ),applyMiddleware(thunk)
);

export default state