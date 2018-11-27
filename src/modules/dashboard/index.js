import dashboardReducer from './reducers';
import { DashboardContainer } from "./containers/DashboardContainer";

export default {
    view: DashboardContainer,
    reducers: dashboardReducer,
    name: 'dashboard',
};