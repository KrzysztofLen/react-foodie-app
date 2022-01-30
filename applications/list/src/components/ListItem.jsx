import React from 'react';

import { Rating } from 'primereact/rating';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';

const ListItem = ({ data }) => {
    const category_type = {
        Vegetarian: 'success',
        Vegan: 'primary',
        ['Low Carb']: 'info',
        ['Low Fat']: 'danger',
        ['Low Calorie']: 'warning',
    }[data.category];

    return (
        <div className="col-12">
            <div className="product-list-item">
                <img
                    src={data.image}
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
                    <Tag className="mr-2" severity={`${category_type}`}>
                        {data.category}
                    </Tag>
                </div>
                <div className="product-list-action">
                    <Button
                        icon="pi pi-heart"
                        className="p-button-rounded p-button-help p-button-outlined"
                        onClick={() => console.log('click')}
                    />
                    <span className="product-reviews">
                        <span className="product-reviews-number">
                            {data.reviews}
                        </span>{' '}
                        <span>reviews</span>
                    </span>
                    <Button
                        icon="pi pi-shopping-cart"
                        label="Add to Cart"></Button>
                </div>
            </div>
        </div>
    );
};

export default ListItem;
