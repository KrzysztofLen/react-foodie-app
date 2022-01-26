import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { Knob } from 'primereact/knob';

import { MOCK_DATA } from './data/products';
import { CATEGORY } from '../../list/src/data/products';

import './style.css';

const Cart = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(MOCK_DATA.data);
    }, []);

    return (
        <div>
            <div className="statistic-container">
                <div className="statistic-item">
                    <Knob
                        value={10}
                        readOnly
                        valueColor={'MediumTurquoise'}
                        rangeColor={'SlateGray'}
                    />
                    <h4 className="statistic-label">{CATEGORY.Vegetarian}</h4>
                </div>
                <div className="statistic-item">
                    <Knob
                        value={50}
                        readOnly
                        valueColor={'#eec137'}
                        rangeColor={'SlateGray'}
                    />
                    <h4 className="statistic-label">{CATEGORY['Low Carb']}</h4>
                </div>
                <div className="statistic-item">
                    <Knob
                        value={20}
                        readOnly
                        valueColor={'#f06bac'}
                        rangeColor={'SlateGray'}
                    />
                    <h4 className="statistic-label">{CATEGORY['Low Fat']}</h4>
                </div>
                <div className="statistic-item">
                    <Knob
                        value={40}
                        readOnly
                        valueColor={'#1da750'}
                        rangeColor={'SlateGray'}
                    />
                    <h4 className="statistic-label">{CATEGORY.Vegan}</h4>
                </div>
                <div className="statistic-item">
                    <Knob
                        value={90}
                        readOnly
                        valueColor={'#3b82f6'}
                        rangeColor={'SlateGray'}
                    />
                    <h4 className="statistic-label">
                        {CATEGORY['Low Calorie']}
                    </h4>
                </div>
            </div>
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
