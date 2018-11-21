import { createDynamicStore } from 'dynamic-redux-imports';
import { combineReducers } from 'redux';

function reducer(state = {}) {
    return state;
}

function reducer2(state = {}) {
    return state;
}

const rootReducer = combineReducers({
    main: reducer,
    second: reducer2
});

export default createDynamicStore({ root: rootReducer });