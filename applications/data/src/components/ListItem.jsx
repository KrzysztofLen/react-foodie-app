import React from 'react';

import { Rating } from 'primereact/rating';
import { Button } from 'primereact/button';

const ListItem = ({ data }) => {
    return (
        <div className="col-12">
            <div className="product-list-item">
                <img
                    src={`images/product/${data.image}`}
                    onError={(e) =>
                        (e.target.src =
                            'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
                    }
                    alt={data.name}
                />
                <div className="product-list-detail">
                    <div className="product-name">{data.name}</div>
                    <div className="product-description">
                        {data.description}
                    </div>
                    <Rating
                        value={data.rating}
                        readOnly
                        cancel={false}></Rating>
                    <i className="pi pi-tag product-category-icon"></i>
                    <span className="product-category">{data.category}</span>
                </div>
                <div className="product-list-action">
                    <span className="product-price">${data.price}</span>
                    <Button
                        icon="pi pi-shopping-cart"
                        label="Add to Cart"
                        disabled={
                            data.inventoryStatus === 'OUTOFSTOCK'
                        }></Button>
                    <span
                        className={`product-badge status-${data.inventoryStatus.toLowerCase()}`}>
                        {data.inventoryStatus}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ListItem;
