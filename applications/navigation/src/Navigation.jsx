import React from 'react';

import { Menubar } from 'primereact/menubar';

import Search from './components/Search';
import Logo from './components/Logo';

const Navigation = ({ items }) => {
    // throw Error('error');
    return <Menubar model={items} start={<Logo />} end={<Search />} />;
};

export default Navigation;
