import { ACTIONS } from "../common/magicValues";

const routing = (state = [], action) => {
    switch (action.type) {
        case ACTIONS.ROUTING_LOADED:
            return action.navigation;
        default:
            return state;
    }
};

export default routing;