import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import { Chip } from 'primereact/chip';

import { Toggle } from '@krzysztoflen/react-foodie-app.toggle';

import { MOCK_DATA } from './data/products';

import './style.css';

const Cookbook = () => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        setProducts(MOCK_DATA.data);
    }, []);

    const reviewTemplate = (item) => {
        return <Chip label={item.reviews} />;
    };

    const ratingTemplate = (item) => {
        return <Rating value={item.rating} readOnly cancel={false} />;
    };

    const categoryTemplate = (item) => {
        return <Tag className="mr-2">{item.category}</Tag>;
    };

    const onRemoveItem = (item) => {
        const newProductList = products.filter(
            (product) => product.id !== item.id,
        );

        setProducts(newProductList);
    };

    const actionsTemplate = (item) => {
        return (
            <div className="cookbook-actions">
                <Button
                    label="Add to Cart"
                    className="p-button-outlined p-button-sm"
                    icon="pi pi-shopping-cart"
                />
                <Button
                    label="Remove"
                    className="p-button-outlined p-button-danger p-button-sm"
                    icon="pi pi-trash"
                    onClick={() => onRemoveItem(item)}
                />
            </div>
        );
    };

    const priceTemplate = (item) => {
        return <span>${item.price}</span>;
    };

    const nameTemplate = (item) => {
        return <h4>{item.name}</h4>;
    };
    // throw new Error('Cookbook crashed'!);
    return (
        <div>
            <Panel header="Cookbook">
                <p>Here are your favourites recepies</p>
                <Toggle />
            </Panel>
            <div className="card">
                <DataTable value={products} responsiveLayout="scroll">
                    <Column field="name" header="Name" body={nameTemplate} />
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
                    <Column field="price" header="Price" body={priceTemplate} />
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
