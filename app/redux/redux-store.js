import {applyMiddleware, combineReducers, createStore} from "redux";

import thunkMiddleware from "redux-thunk"
import questionsReducer from "./question-reducer";
import actionsReducer from "./actions-reducer";
import lobbyReducer from "./lobby-reducer";

let reducers = combineReducers({
    questions: questionsReducer,
    actions: actionsReducer,
    lobby: lobbyReducer
});


let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
