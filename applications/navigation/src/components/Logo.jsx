import React from 'react';

export default () => (
    <img
        alt="logo"
        src="showcase/images/logo.png"
        onError={(e) =>
            (e.target.src =
                'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
        }
        height="40"
        className="mr-2"
    />
);
