import React from "react";
import { connect } from 'react-redux';
import { Module } from 'dynamic-redux-imports';

import {
    NavigationMenu
} from "../../components/Navigation";

const buildNavigation = (routing) => {
    console.log(routing)
    const result = {
        routes: [],
        navigation: []
    };

    for (let { url, name, value } of routing) {
        result.routes.push({
            path: url,
            component: (()=><Module resolve={() => import(`../../modules/${value}`)}/>)
        });

        result.navigation.push({ to: url, name });
    }

    return result;
};

const mapStateToProps = ({ rootReducer }) => buildNavigation(rootReducer.routing);

export const NavigationMenuContainer = connect(
    mapStateToProps
)(NavigationMenu);