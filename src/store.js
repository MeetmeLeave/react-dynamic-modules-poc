import { createDynamicStore } from 'dynamic-redux-imports';
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from './reducers';
import { loadRouting } from "./actions";
import { SERVER_URL_ROUTING } from "./common/magicValues";

const store = createDynamicStore({ rootReducer }, applyMiddleware(thunk));
store.dispatch(loadRouting(SERVER_URL_ROUTING));

export default store;