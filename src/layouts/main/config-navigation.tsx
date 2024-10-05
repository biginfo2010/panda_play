// components
import { t } from 'i18next';
import Iconify from 'src/components/iconify';
import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

export const navConfig = [
  {
    title: t("menu.membership"),
    icon: <Iconify icon="solar:home-2-bold-duotone" />,
    path: 'membership',
    children: [
      {
        subheader: 'membership',
        items: [
          { title: t('menu.join_pre'), path: `${paths.membership}?1` },
          { title: t('menu.member_app'), path: `${paths.membership}?2` },
          { title: t('menu.ico_schedule'), path: `${paths.membership}?3` },
          { title: t('menu.ico_launchpad'), path: `${paths.membership}?4` },
          { title: t('menu.trading'), path: `${paths.membership}?5` },
          { title: t('menu.platform'), path: `${paths.membership}?6` },
          { title: t('menu.smart_contracts'), path: `${paths.membership}?7`},
        ],
      },
    ]
  },
  {
    title: t('menu.pro_info'),
    icon: <Iconify icon="solar:home-2-bold-duotone" />,
    path: 'pro_info',
    children: [
      {
        subheader: 'project information',
        items: [
          { title: t('menu.white_paper'), path: `${paths.project}?1` },
          { title: t('menu.tokenomics'), path: `${paths.project}?2` },
          { title: t('menu.dao'), path: `${paths.project}?3` },
          { title: t('menu.road_map'), path: `${paths.project}?4` },
          { title: t('menu.in_proposal'), path: `${paths.project}?5` },
          { title: t('menu.de_proposal'), path: `${paths.project}?6` },
        ],
      },
    ]
  },
  {
    title: t('menu.rewards'),
    icon: <Iconify icon="solar:home-2-bold-duotone" />,
    path: 'rewards',
    children: [
      {
        subheader: 'rewards',
        items: [
          { title: t('menu.vesting'), path: `${paths.reward}?1` },
          { title: t('menu.staking'), path: `${paths.reward}?2` },
          { title: t('menu.purchase'), path: `${paths.reward}?3` },
          { title: t('menu.referral'), path: `${paths.reward}?4` },
          { title: t('menu.buy_program'), path: `${paths.reward}?5` },
          { title: t('menu.panda_wallet'), path: `${paths.reward}?6` },
        ],
      },
    ]
  },
  {
    title: t('menu.entertainment'),
    icon: <Iconify icon="solar:home-2-bold-duotone" />,
    path: 'entertainment',
    children: [
      {
        subheader: 'entertainments',
        items: [
          { title: t('menu.portal'), path: `${paths.entertainment}?1` },
          { title: t('menu.links'), path: `${paths.entertainment}?2` },
          { title: t('menu.mini_games'), path: `${paths.entertainment}?3` },
          { title: t('menu.nft'), path: `${paths.entertainment}?4` },
          { title: t('menu.rainbow'), path: `${paths.entertainment}?5` },
          { title: t('menu.digital'), path: `${paths.entertainment}?6` },
        ],
      },
    ]
  },
  {
    title: t('menu.governance'),
    icon: <Iconify icon="solar:home-2-bold-duotone" />,
    path: 'governance',
    children: [
      {
        subheader: 'governance',
        items: [
          { title: t('menu.parental_entity'), path: `${paths.governance}?1` },
          { title: t('menu.partnership'), path: `${paths.governance}?2` },
          { title: t('menu.affiliations'), path: `${paths.governance}?3` },
          { title: t('menu.joint'), path: `${paths.governance}?4` },
          { title: t('menu.contract'), path: `${paths.governance}?5` },
          { title: t('menu.kyc'), path: `${paths.governance}?6` },
          { title: t('menu.faq'), path: paths.faqs },
          { title: t('menu.support'), path: paths.contact },
        ],
      },
    ]
  },
];
