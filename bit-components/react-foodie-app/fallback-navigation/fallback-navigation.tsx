import React, { SyntheticEvent } from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import styles from './fallback-navigation.module.scss';

// export type FallbackNavigationProps = {
//     /**
//      * a node to be rendered in the special component.
//      */
//     children?: ReactNode;
// };

const Logo = () => (
    <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
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
    </Typography>
);

export const FallbackNavigation = ({ pages }: { pages: any[] }) => {
    return (
        <AppBar position="static" className={styles.navigation}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Logo />
                    {pages.map((page) => (
                        <Button
                            key={page.url}
                            className={styles['navigation-link-button']}
                            onClick={() => {}}
                            sx={{
                                my: 2,
                                color: 'white',
                                display: 'block',
                            }}>
                            <a
                                className={styles['navigation-link']}
                                href={page.url}>
                                {page.label}
                            </a>
                        </Button>
                    ))}
                </Toolbar>
            </Container>
        </AppBar>
    );
};
