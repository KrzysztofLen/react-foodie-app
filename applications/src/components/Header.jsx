import React from 'react';
import { DataViewLayoutOptions } from 'primereact/dataview';

const Header = ({ setLayout, layout }) => {
    return (
        <div className="grid grid-nogutter">
            <div className="col-6" style={{ textAlign: 'right' }}>
                <DataViewLayoutOptions
                    layout={layout}
                    onChange={(e) => setLayout(e.value)}
                />
            </div>
        </div>
    );
};

export default Header;
