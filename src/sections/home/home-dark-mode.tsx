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
import Card from '@mui/material/Card';

// ----------------------------------------------------------------------
const CARDS = [
  {
    icon: ' /assets/icons/home/Learning fun.gif',
    title: 'Account Application Program',
    description: 'Consistent design makes it easy to brand your own.',
    bgColor: '#3b8ede',
  },
  {
    icon: ' /assets/icons/home/Rocket.gif',
    title: 'Vesting Program',
    description:
      'The kit is built on the principles of the atomic design system. It helps you to create projects fastest and easily customized packages for your projects.',
    bgColor: '#ffa400',

  },
  {
    icon: ' /assets/icons/home/Something for everyone.gif',
    title: 'Staking Program',
    description: 'Easy to customize and extend, saving you time and money.',
    bgColor: '#c3d600',
  },
];
export default function HomeDarkMode() {

  const renderDescription = (
    <Stack alignItems="center" spacing={3}>
      <m.div variants={varFade().inUp}>
        <Typography component="div" variant="overline" sx={{ color: 'primary.main' }}>
          Panda World
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography variant="h2" sx={{ color: 'common.black' }}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          What's Panda World
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography sx={{ color: 'grey.900' }}>
          Panda World is a wholly owned subsidiary of Crypto World Entertainment. Panda World is poised to revolutionize the gaming industry by merging play-to-earn (P2E) and play and earn gaming with charitable contributions and environmental advocacy. Our innovative approach not only provides exciting gaming experiences for users but also engages them in meaningful ways to support vital causes.
        </Typography>
        <Typography sx={{ color: 'grey.900' }}>
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

  const renderImg = (
    <m.div variants={varFade().inUp}>
      <Image
        alt="darkmode"
        src="/assets/images/home/hero/new-banner.png"
        sx={{
          borderRadius: 2,
          my: { xs: 5, md: 6 },
          boxShadow: (theme) => `-40px 40px 80px ${alpha(theme.palette.common.black, 0.24)}`,
        }}
      />
    </m.div>
  );
  return (
    <Box
      sx={{
        textAlign: 'center',
        bgcolor: '#fafaf6',
        pt: { xs: 10, md: 15 },
        pb: { xs: 10, md: 20 },
      }}
    >
      <Container component={MotionViewport}>
        {renderDescription}
        {renderImg}
        <Box
          gap={{ xs: 3, lg: 10 }}
          display="grid"
          alignItems="center"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
          }}
        >
          {CARDS.map((card, index) => (
            <m.div variants={varFade().inUp} key={card.title}>
              <Card
                sx={{
                  textAlign: 'center',
                  boxShadow: { md: 'none' },
                  bgcolor: 'white',
                  p: (theme) => theme.spacing(2, 2),
                  ...(index === 1 && {
                    boxShadow: (theme) => ({
                      md: `-40px 40px 80px ${
                        theme.palette.mode === 'light'
                          ? alpha(theme.palette.grey[500], 0.16)
                          : alpha(theme.palette.common.black, 0.4)
                      }`,
                    }),
                  }),
                }}
              >
                <Box
                  component="img"
                  src={card.icon}
                  alt={card.title}
                  sx={{ mx: 'auto', width: 150, height: 150, borderRadius: 1 }}
                />
              </Card>
            </m.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
