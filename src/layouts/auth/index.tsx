// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
// theme
import { bgGradient } from 'src/theme/css';
// components
import Logo from 'src/components/logo';

type Props = {
  image?: string;
  children: React.ReactNode;
};

export default function AuthLayout({ children, image }: Props) {
  // const { method } = useAuthContext();

  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  const renderLogo = (
    <Logo
      sx={{
        zIndex: 9,
        position: 'absolute',
        m: { xs: 2, md: 5 },
      }}
    />
  );

  const renderContent = (
    <Stack
      sx={{
        width: 1,
        mx: 'auto',
        maxWidth: 480,
        px: { xs: 2, md: 8 },
        pt: { xs: 15, md: 20 },
        pb: { xs: 15, md: 0 },
      }}
    >
      {children}
    </Stack>
  );

  const renderSection = (
    <Stack
      flexGrow={1}
      spacing={10}
      alignItems="center"
      justifyContent="center"
      sx={{
        ...bgGradient({
          color: alpha(
            theme.palette.background.default,
            theme.palette.mode === 'light' ? 0.88 : 0.94
          ),
          imgUrl: '/assets/background/overlay_2.jpg',
        }),
      }}
    >
      <Box
        component="img"
        alt="auth"
        src={image || '/assets/illustrations/illustration_dashboard.png'}
        sx={{
          maxWidth: {
            xs: 480,
            lg: 560,
            xl: 720,
          },
        }}
      />

      {/* <Stack direction="row" spacing={2}> */}
      {/*  {METHODS.map((option) => ( */}
      {/*    <Tooltip key={option.label} title={option.label}> */}
      {/*      <Link component={RouterLink} href={option.path}> */}
      {/*        <Box */}
      {/*          component="img" */}
      {/*          alt={option.label} */}
      {/*          src={option.icon} */}
      {/*          sx={{ */}
      {/*            width: 32, */}
      {/*            height: 32, */}
      {/*            ...(method !== option.id && { */}
      {/*              filter: 'grayscale(100%)', */}
      {/*            }), */}
      {/*          }} */}
      {/*        /> */}
      {/*      </Link> */}
      {/*    </Tooltip> */}
      {/*  ))} */}
      {/* </Stack> */}
    </Stack>
  );

  return (
    <Stack
      component="main"
      direction="row"
      sx={{
        minHeight: '100vh',
      }}
    >
      {renderLogo}

      {mdUp && renderSection}

      {renderContent}
    </Stack>
  );
}
