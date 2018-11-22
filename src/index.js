import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import store from './store';
import {NavigationMenuContainer} from "./containers/Navigation/NavigationMenuContainer";

const App = () => (
    <Provider store={store}>
        <NavigationMenuContainer/>
    </Provider>
);


render(<App/>, document.getElementById('app'));