import React from 'react';
import { Link } from 'react-router-dom';

const renderLabel = (label, options) => {
    return (
        <>
            <span className={options.iconClassName}></span>
            <span className={options.labelClassName}>{label}</span>
        </>
    );
};

export const routes = [
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
