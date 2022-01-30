import React from 'react';
import { Button } from 'primereact/button';

const items = [
    'Vegetable shashlik',
    'Tuna salad',
    'Cauliflower pizza',
    'Halloumi fries',
];
const FallbackCart = () => (
    <>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => (
                    <tr key={item}>
                        <td>{item}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div>
            <h2>SUMMARY</h2>
        </div>

        <div className="checkout">
            <Button label="Proceed to checkout" icon="pi pi-check" />
        </div>
    </>
);

export default FallbackCart;
