import React, { ReactNode } from 'react';

import styles from './footer.module.scss';

type Props = {
    /**
     * Array of React elements with icons
     */
    socials: JSX.Element[];
};

export const Footer = ({ socials }: Props) => (
    <div className={styles.footer}>
        <footer>
            <div className={styles['footer-social']}>
                {socials.map((social) => (
                    <a key={social.key} className={styles.social} href="#">
                        {social}
                    </a>
                ))}
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
            <p className={styles.copyright}>React foodie app © 2022</p>
        </footer>
    </div>
);
