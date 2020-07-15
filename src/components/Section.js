import React, { Component } from 'react';

export default class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title
        }
    }

    render() {
        return (
            <section className="section">
                <h2>{ this.state.title }</h2>
                { this.props.children }
            </section>
        );
    }
}