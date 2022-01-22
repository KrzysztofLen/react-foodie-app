import React from 'react';

import { Rating } from 'primereact/rating';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';

const GridItem = ({ data }) => {
    return (
        <div className="col-12 md:col-4">
            <div className="product-grid-item card">
                <div className="product-grid-item-top">
                    <Tag className="mr-2" severity="success">
                        {data.category}
                    </Tag>

                    <Button
                        icon="pi pi-heart"
                        className="p-button-rounded p-button-help p-button-outlined"
                        onClick={() => console.log('click')}
                    />
                </div>
                <div className="product-grid-item-content">
                    <img
                        src={`images/product/${data.image}`}
                        onError={(e) =>
                            (e.target.src =
                                'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
                        }
                        alt={data.name}
                    />
                    <div className="product-name">{data.name}</div>
                    <div className="product-description">
                        {data.description}
                    </div>
                    <div className="product-rating">
                        <Rating
                            value={data.rating}
                            readOnly
                            cancel={false}></Rating>
                        <span className="product-reviews">
                            <span className="product-reviews-number">1821</span>{' '}
                            <span>reviews</span>
                        </span>
                    </div>
                </div>
                <div className="product-cartButton">
                    <Button
                        icon="pi pi-shopping-cart"
                        label="Add to Cart"
                        disabled={data.inventoryStatus === 'OUTOFSTOCK'}
                    />
                </div>
            </div>
        </div>
    );
};

export default GridItem;
