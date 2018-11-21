import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import { Module } from 'dynamic-redux-imports';
import store from './store';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

////////////////////////////////////////////////////////////
// first our route components
const Sandwiches = () => {
    return <h2>Sandwiches</h2>;
}

const Tacos = ({ routes }) => {
    return (
        <div>
            <h2>Tacos</h2>
            <ul>
                <li>
                    <Link to="/tacos/bus">Bus</Link>
                </li>
                <li>
                    <Link to="/tacos/cart">Cart</Link>
                </li>
            </ul>

            {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
            ))}
        </div>
    );
}

const Bus = () => {
    return <h3>Bus</h3>;
}

const Cart = () => {
    return <h3>Cart</h3>;
}

const M = () => {
    return (<Module resolve={() => import("./modules/dashboard")}/>);
}

////////////////////////////////////////////////////////////
// then our route config
const routes = [
    {
        path: "/sandwiches",
        component: Sandwiches
    },
    {
        path: "/tacos",
        component: Tacos,
        routes: [
            {
                path: "/tacos/bus",
                component: Bus
            },
            {
                path: "/tacos/cart",
                component: Cart
            }
        ]
    },
    {
        path: "/module",
        component: M
    },
];

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = (route) => {
    return (
        <Route
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes}/>
            )}
        />
    );
}

const RouteConfigExample = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/tacos">Tacos</Link>
                    </li>
                    <li>
                        <Link to="/sandwiches">Sandwiches</Link>
                    </li>
                    <li>
                        <Link to="/module">Module</Link>
                    </li>
                </ul>

                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </div>
        </Router>
    );
}
const App = () => (
    <Provider store={store}>
        <RouteConfigExample/>
    </Provider>
);


render(<App/>, document.getElementById('app'));