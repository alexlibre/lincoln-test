import React, { Component } from 'react';
import './Hero.scss';

export default class Hero extends Component {
    render() {
        return (
            <div className="hero">
                <img src="/hero.jpg" alt="Explore the world"/>
                <div className="hero__descript">
                    <h1 className="hero__title">Explore The World</h1>
                    <p className="hero__text">Everyone experiences stress in different ways. Let us guide you, in a personalized journal experience, to overcome your stress.</p>
                    <button className="button button_view_inverted hero__cta">Find Your Way</button>
                </div>
            </div>
        );
    }
}