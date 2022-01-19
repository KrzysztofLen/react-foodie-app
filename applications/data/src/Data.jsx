import React, { useState, useEffect } from 'react';
import { DataView } from 'primereact/dataview';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import { MOCK_DATA } from './data/products';

import Header from './components/Header';
import GridItem from './components/GridItem';
import ListItem from './components/ListItem';

import './Data.css';

const Data = () => {
    const [products, setProducts] = useState(null);
    const [layout, setLayout] = useState('grid');

    useEffect(() => {
        setProducts(MOCK_DATA.data);
    }, []);

    const itemTemplate = (data, layout) => {
        if (!data) {
            return;
        }

        if (layout === 'list') return <ListItem data={data} />;
        else if (layout === 'grid') return <GridItem data={data} />;
    };

    return (
        <div className="dataview-demo">
            <div className="card">
                <DataView
                    value={products}
                    layout={layout}
                    header={<Header setLayout={setLayout} layout={layout} />}
                    itemTemplate={itemTemplate}
                    paginator
                    rows={20}
                />
            </div>
        </div>
    );
};

export default Data;
