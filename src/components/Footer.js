import React, { Component } from 'react';
import './Footer.scss';

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <p className="footer__copy">© {new Date().getFullYear()} GoTravel. All rights reserved</p>
                <ul className="footer__social">
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
                <a className="footer__policy" href="/">Privacy Policy</a>
            </footer>
        );
    }
}