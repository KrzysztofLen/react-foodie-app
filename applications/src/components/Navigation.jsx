import React from 'react';

import { Menubar } from 'primereact/menubar';

import Search from './Search';
import Logo from './Logo';

const Navigation = ({ items }) => {
    // throw new Error('Navigation crashed!');
    return <Menubar model={items} start={<Logo />} end={<Search />} />;
};

export default Navigation;
