import { combineReducers, createStore } from "redux";
import converter from "./converter";
import currency from "./currency";

const reducers = combineReducers({
    currency,
    converter
})

const store = createStore(reducers);

export default store;