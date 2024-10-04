// components
import { t } from 'i18next';
import Iconify from 'src/components/iconify';
import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

export const navConfig = [
  {
    title: t("home"),
    icon: <Iconify icon="solar:home-2-bold-duotone" />,
    path: '/',
  },
  {
    title: t('roadmap'),
    icon: <Iconify icon="solar:home-2-bold-duotone" />,
    path: paths.contact,
  },
  {
    title: t('games'),
    icon: <Iconify icon="solar:home-2-bold-duotone" />,
    path: paths.about,
  },
  {
    title: t('about'),
    icon: <Iconify icon="solar:home-2-bold-duotone" />,
    path: paths.about,
  },
];
