'use client';

import { useScroll } from 'framer-motion';
// @mui
import { alpha, styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
// layouts
import MainLayout from 'src/layouts/main';
// components
import ScrollProgress from 'src/components/scroll-progress';
//
import HomeHero from '../home-hero';
import HomeMinimal from '../home-minimal';
import HomePricing from '../home-pricing';
import HomeDarkMode from '../home-dark-mode';
import HomeLookingFor from '../home-looking-for';
import HomeAdvertisement from '../home-advertisement';
import { bgGradient } from '../../../theme/css';

export default function HomeView() {
  const { scrollYProgress } = useScroll();
  const theme = useTheme();
  return (
    <MainLayout>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <HomeHero />

      <Box
        sx={{
          ...bgGradient({
            color: alpha(theme.palette.grey[900], 0.3),
            imgUrl: '/assets/images/home/hero/background-1.png',
          }),
          overflow: 'initial',
          position: 'relative',
          backgroundPosition: 'top'
        }}
      >
        <div style={{
          display: 'block',
          position: 'absolute',
          width: '250px',
          height: '250px',
          left: 'calc(50% - 125px)',
          top: '-250px',
          zIndex: 5,
          backgroundImage: "url('/assets/images/home/hero/icon.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
        }}
             className="app_waveLayerBlock_2mLTW" />
        <div style={{
          display: 'block',
          position: 'absolute',
          width: '100%',
          height: '190px',
          left: 0,
          top: '-190px',
          zIndex: 4,
          backgroundImage: "url('/assets/images/home/hero/wave-new.svg')",
          backgroundSize: 'initial',
          backgroundPosition: 'bottom',
        }}
             className="app_waveLayerBlock_2mLTW" />
        <HomeDarkMode />
        <HomeMinimal />


        {/* <HomePricing /> */}

        <HomeLookingFor />
        <HomeAdvertisement />
        <div
          style={{
            height: '200px',
            width: '100%',
            position: 'relative',
            backgroundImage: "url('/assets/images/home/hero/footer-banner.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center 0",
            backgroundSize: 'cover',
            marginBottom: '-5px',
            marginTop: '50px'
          }}
          className="overflow-hidden footer_footerTopPhoto_3grmz" />
      </Box>

    </MainLayout>
  );
}
