import React, { SyntheticEvent } from 'react';

export default () => (
    <img
        alt="logo"
        src="showcase/images/logo.png"
        onError={(e: SyntheticEvent<HTMLImageElement, Event>) =>
            (e.currentTarget.src =
                'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
        }
        height="40"
        className="mr-2"
    />
);
