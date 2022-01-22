import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';

import { MOCK_DATA } from './data/products';

import './style.css';

const Cookbook = () => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        setProducts(MOCK_DATA.data);
    }, []);

    const reviewTemplate = (rowData) => {
        return (
            <span
                className={`product-badge status-${
                    rowData.inventoryStatus
                        ? rowData.inventoryStatus.toLowerCase()
                        : ''
                }`}>
                <span className="product-reviews-number">1821</span>
            </span>
        );
    };

    const ratingTemplate = (rowData) => {
        return <Rating value={rowData.rating} readOnly cancel={false} />;
    };

    const categoryTemplate = (rowData) => {
        return (
            <Tag className="mr-2" severity="success">
                {rowData.category}
            </Tag>
        );
    };

    const actionsTemplate = (rowData) => {
        return (
            <div className="cookbook-actions">
                <Button
                    label="Add to Cart"
                    className="p-button-outlined p-button-info p-button-sm"
                    icon="pi pi-shopping-cart"
                />
                <Button
                    label="Remove"
                    className="p-button-outlined p-button-danger p-button-sm"
                    icon="pi pi-trash"
                />
            </div>
        );
    };

    return (
        <div>
            <Panel header="Cookbook">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
            </Panel>
            <div className="card">
                <DataTable value={products} responsiveLayout="scroll">
                    <Column field="code" header="Code" />
                    <Column field="name" header="Name" />
                    <Column
                        field="category"
                        header="Category"
                        body={categoryTemplate}
                    />
                    <Column
                        field="reviews"
                        header="Review"
                        body={reviewTemplate}
                    />
                    <Column
                        field="rating"
                        header="Rating"
                        body={ratingTemplate}
                    />
                    <Column header="Actions" body={actionsTemplate} />
                </DataTable>
            </div>
        </div>
    );
};

export default Cookbook;
