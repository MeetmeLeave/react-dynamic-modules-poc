import { BrowserRouter as Router, Link } from "react-router-dom";
import React from "react";

import { RouteWithSubRoutes } from "./RouteWithSubRoutes";

export const NavigationMenu = ({ routes, navigation }) => {
    return (
        <Router>
            <div>
                <ul>
                    {navigation.map((item, i) => {
                        return (<li key={i}>
                            <Link to={item.to}>{item.name}</Link>
                        </li>);
                    })}
                </ul>

                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </div>
        </Router>
    );
};