import React from 'react';
import PropTypes from 'prop-types';

export const Dashboard = ({ data }) => <div>{data}</div>;

Dashboard.propTypes = {
    data: PropTypes.string
};