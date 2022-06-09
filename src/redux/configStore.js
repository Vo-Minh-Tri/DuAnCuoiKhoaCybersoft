import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { QuanLyPhongReducer } from "./reducers/QuanLyPhongReducer";

const rootReducer = combineReducers({
  // noi chua cac state cua ung dung
  QuanLyPhongReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
