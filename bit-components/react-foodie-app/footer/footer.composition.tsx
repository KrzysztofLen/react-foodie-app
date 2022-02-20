import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';

import { Footer } from './footer';

export const BasicFooter = () => {
    return (
        <Footer
            socials={[
                <LinkedInIcon />,
                <InstagramIcon />,
                <FacebookIcon />,
                <PinterestIcon />,
                <TwitterIcon />,
            ]}
        />
    );
};
