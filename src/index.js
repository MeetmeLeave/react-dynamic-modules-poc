import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import { Module } from 'dynamic-redux-imports';
import store from './store';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

////////////////////////////////////////////////////////////
// then our route config
// const routes = [
//     {
//         path: "/sandwiches",
//         component: Sandwiches
//     },
//     {
//         path: "/tacos",
//         component: Tacos,
//         routes: [
//             {
//                 path: "/tacos/bus",
//                 component: Bus
//             },
//             {
//                 path: "/tacos/cart",
//                 component: Cart
//             }
//         ]
//     },
//     {
//         path: "/module",
//         component: M
//     },
// ];

const App = () => (
    <Provider store={store}>
        <NavigationMenu/>
    </Provider>
);


render(<App/>, document.getElementById('app'));