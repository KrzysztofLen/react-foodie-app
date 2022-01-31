import React from 'react';
// throw new Error('Ooooopssss');
export default () => (
    <div className="footer-basic">
        <footer>
            <div className="social">
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
                    <a href="#">Services</a>
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
            <p className="copyright">React foodie app © 2018</p>
        </footer>
    </div>
);
