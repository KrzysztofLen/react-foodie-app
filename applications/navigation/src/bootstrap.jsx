import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';

import { menuItems } from './menuItems';

ReactDOM.render(
    <Navigation items={menuItems} />,
    document.querySelector('#root'),
);
