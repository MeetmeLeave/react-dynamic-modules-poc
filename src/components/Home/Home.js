import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Home extends Component {
    constructor(props) {
        super(props);
        this.enableModule = this.enableModule.bind(this);
    }

    enableModule(event) {
        this.props.onModuleSelectionChange(event.target.name);
    }

    render() {
        return (
            <div>
                {
                    this.props.routing.map((route) => (
                        <div key={route.name}>
                            {route.value} module: <input name={route.name}
                                                         type="checkbox"
                                                         onChange={this.enableModule}
                                                         defaultChecked={route.isEnabled}/>
                        </div>
                    ))
                }
                <div>This is home page!</div>
            </div>);
    }
}

Home.propTypes = {
    onModuleSelectionChange: PropTypes.func,
    routing: PropTypes.array
};