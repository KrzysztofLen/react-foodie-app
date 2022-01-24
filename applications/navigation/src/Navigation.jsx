import React from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { Menubar } from 'primereact/menubar';

import Search from './components/Search';
import Logo from './components/Logo';

const ListRoute = () => (
    <React.Suspense fallback={<div />}>
        <h1>THIS IS LIST</h1>
    </React.Suspense>
);
const CookbookRoute = () => (
    <React.Suspense fallback={<div />}>
        <h1>THIS IS COOKBOOK</h1>
    </React.Suspense>
);
const ShoppingListRoute = () => (
    <React.Suspense fallback={<div />}>
        <h1>THIS IS SHOPPING LIST</h1>
    </React.Suspense>
);

const history = createBrowserHistory();

const Navigation = () => {
    const renderLabel = (label, options) => {
        return (
            <>
                <span className={options.iconClassName}></span>
                <span className={options.labelClassName}>{label}</span>
            </>
        );
    };

    const items = [
        {
            label: 'List',
            icon: 'pi pi-fw pi-table',
            template: (item, options) => {
                return (
                    <Link to="/" className={options.className}>
                        {renderLabel(item.label, options)}
                    </Link>
                );
            },
        },
        {
            label: 'Recipe',
            icon: 'pi pi-fw pi-apple',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-fw pi-plus',
                },
                {
                    label: 'Edit',
                    icon: 'pi pi-fw pi-pencil',
                },
                {
                    separator: true,
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-fw pi-trash',
                },
            ],
        },
        {
            label: 'Cookbook',
            icon: 'pi pi-fw pi-bookmark',
            template: (item, options) => {
                return (
                    <Link to="/cookbook" className={options.className}>
                        {renderLabel(item.label, options)}
                    </Link>
                );
            },
        },
        {
            label: 'Shopping list',
            icon: 'pi pi-fw pi-shopping-cart',
            template: (item, options) => {
                return (
                    <Link to="/shopping-list" className={options.className}>
                        {renderLabel(item.label, options)}
                    </Link>
                );
            },
        },
    ];
    // throw Error('error');
    return (
        <Router history={history}>
            <Menubar model={items} start={<Logo />} end={<Search />} />
            <Switch>
                <Route path="/" exact>
                    <ListRoute />
                </Route>
                <Route path="/cookbook">
                    <CookbookRoute />
                </Route>
                <Route path="/shopping-list">
                    <ShoppingListRoute />
                </Route>
            </Switch>
        </Router>
    );
};

export default Navigation;
