import React from 'react';

const FallbackNavigation = () => (
    <nav>
        <ul>
            <li>
                <img
                    alt="logo"
                    src="showcase/images/logo.png"
                    onError={(e) =>
                        (e.target.src =
                            'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
                    }
                    height="40"
                    className="mr-2"
                />
            </li>
            <li>
                <a href="/">List</a>
            </li>
            <li>
                <a href="#">Recipe</a>
            </li>
            <li>
                <a href="/cookbook">Cookbook</a>
            </li>
            <li>
                <a href="/shopping-list">Shopping list</a>
            </li>
        </ul>
    </nav>
);

export default FallbackNavigation;
