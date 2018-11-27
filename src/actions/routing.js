import { ACTIONS } from "../common/magicValues";

export const routingLoaded = (routing) => ({
    type: ACTIONS.ROUTING_LOADED,
    routing
});

export const loadRouting = url => {
    return function (dispatch) {
        return fetch(url).then(
            response => response.json().then(
                result => dispatch(routingLoaded(result.routing))
            ));
    };
};

export const updateRouting = (url, name) => {
    return function (dispatch) {
        return fetch(url, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            referrer: "no-referrer",
            body: JSON.stringify({ name }),
        }).then(
            response => response.json().then(
                result => dispatch(routingLoaded(result.routing))
            ));
    };
};