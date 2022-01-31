import React from 'react';
import { Knob } from 'primereact/knob';

import { CATEGORY } from './../../data/products';

const Statistics = () => {
    // throw new Error('Statistics crashed!');
    return (
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
                <h4 className="statistic-label">{CATEGORY['Low Calorie']}</h4>
            </div>
        </div>
    );
};

export default Statistics;
