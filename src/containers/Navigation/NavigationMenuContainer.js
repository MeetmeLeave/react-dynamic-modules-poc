import { Link } from "react-router-dom";
import React from "react";
import { connect } from 'react-redux';
import { Module } from 'dynamic-redux-imports';

import {
    NavigationMenu,
    RouteWithSubRoutes
} from "../../components/Navigation";

const buildNavigation = (routing) => {
    const result = {
        routes: [],
        navigation: []
    };

    for (let route of routing) {

    }

    return {
        routes: [
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
        ],
        navigation: [
            { to: '/tacos', value: 'Tacos' },
            { to: '/sandwiches', value: 'Sandwiches' },
            { to: '/module', value: 'Module' },
        ]
    };
};


const mapStateToProps = (state) => (
    buildNavigation(state.routing)
);

export const NavigationMenuContainer = connect(
    mapStateToProps
)(NavigationMenu);

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
    return (<Module resolve={() => import("../../modules/dashboard")}/>);
}