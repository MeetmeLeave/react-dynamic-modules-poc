import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { Dashboard } from "../components";


const mapStateToProps = ({ dashboard }) => ({
    data: dashboard.dashboard
});

export const DashboardContainer = withRouter(connect(
    mapStateToProps
)(Dashboard));
