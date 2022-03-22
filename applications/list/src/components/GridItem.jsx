import React, { useState } from 'react';

import { Rating } from 'primereact/rating';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';

import { Snackbar } from '@krzysztoflen/react-foodie-app.snackbar';

const GridItem = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [variant, setVariant] = useState('');
    const [message, setMessage] = useState('');

    const handleClose = (reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setIsOpen(false);
    };

    return (
        <div className="col-12 md:col-4">
            <Snackbar
                isOpen={isOpen}
                onClose={handleClose}
                variant={variant}
                message={message}
                style={{ boxShadow: 'none' }}
            />
            <div className="product-grid-item card">
                <div className="product-grid-item-top">
                    <Tag className="mr-2">{data.category}</Tag>

                    <Button
                        style={{ color: 'var(--orange-500)' }}
                        icon="pi pi-heart"
                        className="p-button-rounded p-button-help p-button-outlined"
                        onClick={() => {
                            setIsOpen(true);
                            setVariant('success');
                            setMessage(`${data.name} added to your cookbook!`);
                        }}
                    />
                </div>
                <div className="product-grid-item-content">
                    <img
                        src={data.image}
                        onError={(e) =>
                            (e.target.src =
                                'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
                        }
                        alt={data.name}
                    />
                    <div className="product-name">{data.name}</div>
                    <div className="product-price">US$ {data.price}</div>
                    <div className="product-rating">
                        <Rating
                            value={data.rating}
                            readOnly
                            cancel={false}></Rating>
                        <span className="product-reviews">
                            <span className="product-reviews-number">
                                {data.reviews}
                            </span>{' '}
                            <span>reviews</span>
                        </span>
                    </div>
                </div>
                <div className="product-cartButton">
                    <Button
                        icon="pi pi-shopping-cart"
                        label="Add to Cart"
                        disabled={data.inventoryStatus === 'OUTOFSTOCK'}
                        onClick={() => {
                            setIsOpen(true);
                            setVariant('info');
                            setMessage(`${data.name} added to cart!`);
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default GridItem;
