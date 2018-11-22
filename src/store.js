import { createDynamicStore } from 'dynamic-redux-imports';
import rootReducer from './reducers';

export default createDynamicStore({ rootReducer });