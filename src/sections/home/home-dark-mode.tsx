import { m } from 'framer-motion';
// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import Image from 'src/components/image';
import { MotionViewport, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function HomeDarkMode() {

  const renderDescription = (
    <Stack alignItems="center" spacing={3}>
      <m.div variants={varFade().inUp}>
        <Typography component="div" variant="overline" sx={{ color: 'primary.main' }}>
          Panda World
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography variant="h2" sx={{ color: 'common.white' }}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          What's Panda World
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography sx={{ color: 'grey.500' }}>
          Panda World is a wholly owned subsidiary of Crypto World Entertainment. Panda World is poised to revolutionize the gaming industry by merging play-to-earn (P2E) and play and earn gaming with charitable contributions and environmental advocacy. Our innovative approach not only provides exciting gaming experiences for users but also engages them in meaningful ways to support vital causes.
        </Typography>
        <Typography sx={{ color: 'grey.500' }}>
          Panda World will revolutionize gaming and philanthropy with innovative opportunities of achieving financial success for both the savvy and inexperienced crypto currency investor (providing both short-term and long-term strategies and goals).
        </Typography>
      </m.div>
    </Stack>
  );
  (
    <m.div variants={varFade().inUp}>
      <Image
        alt="darkmode"
        src="/assets/images/home/darkmode.webp"
        sx={{
          borderRadius: 2,
          my: { xs: 5, md: 10 },
          boxShadow: (theme) => `-40px 40px 80px ${alpha(theme.palette.common.black, 0.24)}`,
        }}
      />
    </m.div>
  );
  return (
    <Box
      sx={{
        textAlign: 'center',
        bgcolor: 'grey.900',
        pt: { xs: 10, md: 15 },
        pb: { xs: 10, md: 20 },
      }}
    >
      <Container component={MotionViewport}>
        {renderDescription}
      </Container>
    </Box>
  );
}
