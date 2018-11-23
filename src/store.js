import { createDynamicStore } from 'dynamic-redux-imports';
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from './reducers';

const store = createDynamicStore({ rootReducer }, applyMiddleware(thunk));

export default store;