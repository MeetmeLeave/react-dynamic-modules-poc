import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'

const MyComponent =  withRouter(connect()(() => <div>some component</div>));

const myReducers = {
    noop: (state = {}) => state
};

export default {
    view: MyComponent,
    reducers: myReducers,
    name: 'myModule',
};