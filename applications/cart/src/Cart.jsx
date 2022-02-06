import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { Tag } from 'primereact/tag';

import Statistics from './components/Statistics';
import { ErrorBoundary } from './ErrorBoundary';

import { MOCK_DATA } from './data/products';

import './style.css';

const Cart = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(MOCK_DATA.data);
    }, []);

    const categoryTemplate = (item) => {
        return <Tag className="mr-2">{item.category}</Tag>;
    };

    const priceTemplate = (item) => {
        return <span>${item.price}</span>;
    };

    const cartPriceSum = products.reduce((prev, cur) => prev + cur.price, 0);
    console.log(cartPriceSum.toFixed(2));
    const footer = () => (
        <div className="cart-footer-summary">
            <div>
                {`In total there are ${
                    products ? products.length : 0
                } products.`}
            </div>
            <div>${cartPriceSum.toFixed(2)}</div>
        </div>
    );

    // throw new Error('Cart crashed!');
    return (
        <div className="cart">
            <ErrorBoundary>
                <Statistics />
            </ErrorBoundary>
            <div className="card">
                <DataTable
                    value={products}
                    resizableColumns
                    columnResizeMode="fit"
                    showGridlines
                    footer={footer}
                    responsiveLayout="scroll">
                    <Column
                        field="name"
                        header="Name"
                        style={{ width: '40%' }}
                    />
                    <Column
                        field="category"
                        header="Category"
                        body={categoryTemplate}
                        style={{ width: '20%' }}
                    />
                    <Column
                        field="quantity"
                        header="Quantity"
                        style={{ width: '20%' }}
                    />
                    <Column
                        field="price"
                        header="Price"
                        body={priceTemplate}
                        style={{ width: '20%' }}
                    />
                </DataTable>
            </div>

            <Divider />

            <div className="checkout">
                <Button
                    label={`Pay $${cartPriceSum.toFixed(2)}`}
                    icon="pi pi-check"
                />
            </div>
        </div>
    );
};

export default Cart;
