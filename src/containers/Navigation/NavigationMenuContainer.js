import { Link } from "react-router-dom";
import React from "react";
import { withRouter } from 'react-router-dom'

import {
    NavigationMenu,
    RouteWithSubRoutes
} from "../../components/Navigation";

// const filterCrewMembers = (crewMembers, stage, { name, city }) => {
//     let result = crewMembers.filter(member => member.stage === stage);
//     result = name ? result.filter(
//         member => member.name.first.indexOf(name) >= 0) : result;
//     result = city ? result.filter(
//         member => member.location.city.indexOf(city) >= 0) : result;
//     return result;
// }

const mapStateToProps = (state, ownProps) => ({
    // members: filterCrewMembers(state.crewMembers, ownProps.stage, state.visibilityFilters),
    // header: STAGES[ownProps.stage]
    routes: [],
    navigation: []
});

export const NavigationMenuContainer = withRouter(connect(
    mapStateToProps
)(NavigationMenu));

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