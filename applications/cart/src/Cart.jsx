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
                        style={{ width: '20%' }}
                    />
                </DataTable>
            </div>

            <Divider />

            <div>
                <h2>SUMMARY</h2>
            </div>

            <div className="checkout">
                <Button label="Proceed to checkout" icon="pi pi-check" />
            </div>
        </div>
    );
};

export default Cart;
