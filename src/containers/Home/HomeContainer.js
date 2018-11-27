import React from "react";
import { connect } from 'react-redux';
import { SERVER_URL_ROUTING } from "../../common/magicValues";
import { updateRouting } from "../../actions";
import { Home } from "../../components/Home";

const mapStateToProps = ({ rootReducer }) => ({
    routing: rootReducer.routing
});

const mapDispatchToProps = (dispatch) => ({
    onModuleSelectionChange: (
        name
    ) => dispatch(updateRouting(SERVER_URL_ROUTING, name))
});

export const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);