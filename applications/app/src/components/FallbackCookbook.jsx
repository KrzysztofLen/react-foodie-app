import React from 'react';

const items = ['Bamboo Watch', 'Black Watch', 'Blue Band', 'Blue T-Shirt'];
const FallbackCookbook = () => (
    <>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <table>
            <thead>
                <tr>
                    <th colSpan="4">Fallback cookbook</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => (
                    <tr>
                        <td>{item}</td>

                        <td>
                            <button>Add to cart</button>
                            <button>Remove</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
);

export default FallbackCookbook;
