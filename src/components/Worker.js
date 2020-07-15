import React, { Component } from 'react';
import './Worker.scss';

export default class Worker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: props.person,
            image: props.image,
            role: props.role,
            phone: props.phone
        }
    }

    render() {
        return (
            <div className="card worker">
                <div className="card__avatar">
                    <div className="card__image">
                        <img src={this.state.image} alt={this.state.person} />
                    </div>
                </div>
                <p className="worker__name">{this.state.person}</p>
                <p className="worker__role">{this.state.role}</p>
                <a className="worker__phone" href={'tel:' + this.state.phone}>{this.state.phone}</a>
            </div>
        );
    }
}