import React, { Component } from 'react';
import Page from './page';

export default class index extends Component {
    render() {
        return (
            <Page props={this.props} />
        )
    }
}
