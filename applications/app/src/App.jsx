import React, { Component } from 'react';

import { Chip } from 'primereact/chip';

export default () => {
    return (
        <div>
            <h1>Welcome in the Foodie App</h1>
            <Chip label="Text with icon" icon="pi pi-check" />
        </div>
    );
};
