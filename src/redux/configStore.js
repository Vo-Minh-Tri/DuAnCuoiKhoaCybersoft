import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  // noi chua cac state cua ung dung
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
