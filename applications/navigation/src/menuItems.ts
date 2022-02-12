import { Item } from './types';

export const menuItems: Item[] = [
    {
        label: 'List',
        icon: 'pi pi-fw pi-table',
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
    },
    {
        label: 'Shopping list',
        icon: 'pi pi-fw pi-shopping-cart',
    },
];
