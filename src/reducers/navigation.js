import { ACTIONS } from "../common/magicValues";

const navigation = (state = [], action) => {
    switch (action.type) {
        case ACTIONS.NAVIGATION_LOADED:
            return action.navigation;
        default:
            return state;
    }
};

export default navigation;