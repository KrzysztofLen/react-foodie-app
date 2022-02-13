import React from 'react';
import ReactDOM from 'react-dom';
import AppWithRouter from './App';

import { Router } from 'react-router-dom';

import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <AppWithRouter />
    </Router>,
    document.querySelector('#root'),
);
