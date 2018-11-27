import React from "react";
import { connect } from 'react-redux';
import { Module } from 'dynamic-redux-imports';

import {
    NavigationMenu
} from "../../components/Navigation";
import { HomeContainer } from "../Home";

const HomeNav = () => <HomeContainer/>;
const modulesCache = {};
const staticRouting = [
    {
        path: '/',
        exact: true,
        component: HomeNav
    }
];
const staticNavigation = [
    { to: '/', value: 'Home' }
];

function getDynamicModule(name) {
    /* eslint-disable react/display-name */
    const module = modulesCache[name] || ((props) => (
        <Module {...props}
                resolve={() => import(`../../modules/${name}`)}/>));

    modulesCache[name] = module;
    return module;
}

const buildNavigation = (routing) => {
    const result = {
        routes: [...staticRouting],
        navigation: [...staticNavigation]
    };

    for (let { url, name, value, isEnabled } of routing) {
        if (isEnabled) {
            result.routes.push({
                path: url,
                component: getDynamicModule(name)
            });

            result.navigation.push({ to: url, value });
        }
    }

    return result;
};

const mapStateToProps = ({ rootReducer }) => buildNavigation(rootReducer.routing);

export const NavigationMenuContainer = connect(
    mapStateToProps
)(NavigationMenu);