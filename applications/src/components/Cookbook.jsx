import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import { Chip } from 'primereact/chip';

import { MOCK_DATA } from '../../data/products';

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
        const category_type = {
            Vegetarian: 'success',
            Vegan: 'primary',
            ['Low Carb']: 'info',
            ['Low Fat']: 'danger',
            ['Low Calorie']: 'warning',
        }[item.category];
        return (
            <Tag className="mr-2" severity={`${category_type}`}>
                {item.category}
            </Tag>
        );
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
                    className="p-button-outlined p-button-info p-button-sm"
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

    const nameTemplate = (item) => {
        return <h4>{item.name}</h4>;
    };
    // throw new Error('Cookbook crashed'!);
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
                    <Column field="id" header="ID" />
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
