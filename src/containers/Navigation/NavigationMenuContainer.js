import React from "react";
import { connect } from 'react-redux';
import { Module } from 'dynamic-redux-imports';

import {
    NavigationMenu
} from "../../components/Navigation";

const modulesCache = {};

const buildNavigation = (routing) => {
    const result = {
        routes: [],
        navigation: []
    };

    for (let { url, name, value } of routing) {

        const module = modulesCache[name] || ((props) => (
            <Module {...props}
                    resolve={() => import(`../../modules/${name}`)}/>));

        modulesCache[name] = module;

        result.routes.push({
            path: url,
            component: module
        });

        result.navigation.push({ to: url, value });
    }

    return result;
};

const mapStateToProps = ({ rootReducer }) => buildNavigation(rootReducer.routing);

export const NavigationMenuContainer = connect(
    mapStateToProps
)(NavigationMenu);