import React from "react";
import { connect } from 'react-redux';
import { Module } from 'dynamic-redux-imports';

import {
    NavigationMenu
} from "../../components/Navigation";

const buildNavigation = (routing) => {
    const result = {
        routes: [],
        navigation: []
    };

    for (let { url, name, value } of routing) {
        routes.push({
            path: url,
            component: <Module resolve={() => import(`../../modules/${name}`)}/>
        });

        navigation.push({ to: route, value });
    }

    return result;
};

const mapStateToProps = ({ rootReducer }) => buildNavigation(rootReducer.routing);

export const NavigationMenuContainer = connect(
    mapStateToProps
)(NavigationMenu);