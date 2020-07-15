import React, { Component } from 'react';
import './Header.scss';

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="header__top">
                    <div className="wrapper">
                        <div className="header__links">
                            <a className="header__logo" href="/">
                                <img src="https://ll-code-test.s3.amazonaws.com/images/logo.jpg" alt="Yourbrand logo"></img>
                            </a>
                            <div className="header__opentime">
                                <span class="icon fa fa-clock-o"></span> 09:00AM — 05:00PM
                            </div>
                            <a className="header__phone" href="tel:+1323-913-4688">
                                <span class="icon fa fa-phone"></span> +1 323-913-4688
                            </a>
                            <button className="button button_view_default header_quote">Get a Free Quote</button>
                        </div>
                    </div>
                </div>
                <div className="header__bottom">
                    <div className="wrapper">
                        <nav className="header__nav menu">
                            <ul className="menu__list">
                                <li className="menu__item">
                                    <a className="menu__link" href="/">Home</a>
                                </li>
                                <li className="menu__item">
                                    <a className="menu__link" href="/">About</a>
                                </li>
                                <li className="menu__item">
                                    <a className="menu__link" href="/">Our Tours</a>
                                </li>
                                <li className="menu__item">
                                    <a className="menu__link" href="/">Gallery</a>
                                </li>
                                <li className="menu__item">
                                    <a className="menu__link" href="/">Blog</a>
                                </li>
                                <li className="menu__item">
                                    <a className="menu__link" href="/">Contact Us</a>
                                </li>
                                <li className="menu__item">
                                    <a className="menu__link" href="/">Pages</a>
                                </li>
                            </ul>
                            <ul className="header__social">
                                <li>
                                    <a className="icon fa fa-facebook" href="/"></a>
                                </li>
                                <li>
                                    <a className="icon fa fa-twitter" href="/"></a>
                                </li>
                                <li>
                                    <a className="icon fa fa-google-plus" href="/"></a>
                                </li>
                                <li>
                                    <a className="icon fa fa-instagram" href="/"></a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                
            </header>
        );
    }
}