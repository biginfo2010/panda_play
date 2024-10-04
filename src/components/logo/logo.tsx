import { forwardRef } from 'react';
import Link from '@mui/material/Link';
import Box, { BoxProps } from '@mui/material/Box';
// routes
import { RouterLink } from 'src/routes/components';
import Image from 'next/image';

import logoImg from "public/logo/logo.png"

// ----------------------------------------------------------------------

export interface LogoProps extends BoxProps {
  disabledLink?: boolean;
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ disabledLink = false, sx, ...other }, ref) => {

    const logo = (
      <Box
        ref={ref}
        component="div"
        sx={{
          width: 110,
          height: 75,
          display: 'inline-flex',
          ...sx,
        }}
        {...other}
      >
        <Image
          src={logoImg}   // Use the imported image
          alt="Panda World"
          style={{ width: '100%', height: '100%', position: 'relative' }}
        />
      </Box>
    );

    if (disabledLink) {
      return logo;
    }

    return (
      <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
        {logo}
      </Link>
    );
  }
);

export default Logo;
