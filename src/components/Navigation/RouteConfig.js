import { BrowserRouter as Router, Link } from "react-router-dom";
import React from "react";
import { RouteWithSubRoutes } from "./RouteWithSubRoutes";

export const RouteConfig = ({ routes }) => {
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
};