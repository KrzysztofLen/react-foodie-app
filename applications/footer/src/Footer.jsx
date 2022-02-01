import React from 'react';
import { ErrorBoundary } from './ErrorBoundary';

const LogoLazy = React.lazy(() => import('navigation/Logo'));
const SearchLazy = React.lazy(() => import('navigation/Search'));

import './style.css';

const Footer = () => (
    // throw new Error('Ooooopssss');
    <div className="footer">
        <footer>
            <div className="footer-widgets">
                <ErrorBoundary>
                    <LogoLazy />
                </ErrorBoundary>
                <div className="footer-search">
                    <ErrorBoundary>
                        <SearchLazy />
                    </ErrorBoundary>
                </div>
            </div>
            <div className="footer-social">
                <a href="#">
                    <i className="pi pi-instagram"></i>
                </a>
                <a href="#">
                    <i className="pi pi-vimeo"></i>
                </a>
                <a href="#">
                    <i className="pi pi-twitter"></i>
                </a>
                <a href="#">
                    <i className="pi pi-facebook"></i>
                </a>
            </div>
            <ul className="list-inline">
                <li className="list-inline-item">
                    <a href="#">Home</a>
                </li>
                <li className="list-inline-item">
                    <a href="#">Cookbook</a>
                </li>
                <li className="list-inline-item">
                    <a href="#">About</a>
                </li>
                <li className="list-inline-item">
                    <a href="#">Terms</a>
                </li>
                <li className="list-inline-item">
                    <a href="#">Privacy Policy</a>
                </li>
            </ul>
            <p className="copyright">React foodie app © 2022</p>
        </footer>
    </div>
);

export default Footer;
