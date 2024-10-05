
const ROOTS = {
  AUTH: '/auth',
  AUTH_DEMO: '/auth-demo',
  DASHBOARD: '/dashboard',
  MEMBERSHIP: '/membership',
  PROJECT: '/project',
  REWARD: '/reward',
  ENTERTAINMENT: '/entertainment',
  GOVERNANCE: '/governance',
};

// ----------------------------------------------------------------------

export const paths = {
  comingSoon: '/coming-soon',
  about: '/about-us',
  contact: '/contact-us',
  faqs: '/faqs',
  page403: '/error/403',
  page404: '/error/404',
  page500: '/error/500',
  membership: '/membership',
  project: '/project',
  reward: '/reward',
  entertainment: '/entertainment',
  governance: '/coming-soon?governance',

  // membership: {
  //   join: `${ROOTS.MEMBERSHIP}/join`,
  //   member: `${ROOTS.MEMBERSHIP}/member-app`,
  //   icoSchedule: `${ROOTS.MEMBERSHIP}/ico-schedule`,
  //   icoLaunchpad: `${ROOTS.MEMBERSHIP}/ico-launchpad`,
  //   trading: `${ROOTS.MEMBERSHIP}/trading`,
  //   platform: `${ROOTS.MEMBERSHIP}/platform`,
  //   smart: `${ROOTS.MEMBERSHIP}/smart`,
  // },
  // project: {
  //   white: `${ROOTS.PROJECT}/white`,
  //   token: `${ROOTS.PROJECT}/token`,
  //   dao: `${ROOTS.PROJECT}/dao`,
  //   roadmap: `${ROOTS.PROJECT}/roadmap`,
  //   inProposal: `${ROOTS.PROJECT}/in-proposal`,
  //   deProposal: `${ROOTS.PROJECT}/de-proposal`,
  // },
  // reward: {
  //   vesting: `${ROOTS.REWARD}/vesting`,
  //   staking: `${ROOTS.REWARD}/staking`,
  //   purchase: `${ROOTS.REWARD}/purchase`,
  //   referral: `${ROOTS.REWARD}/referral`,
  //   buy: `${ROOTS.REWARD}/buy`,
  //   wallet: `${ROOTS.REWARD}/wallet`,
  // },
  // entertainment: {
  //   portal: `${ROOTS.ENTERTAINMENT}/portal`,
  //   link: `${ROOTS.ENTERTAINMENT}/link`,
  //   mini: `${ROOTS.ENTERTAINMENT}/mini`,
  //   nft: `${ROOTS.ENTERTAINMENT}/nft`,
  //   rainbow: `${ROOTS.ENTERTAINMENT}/rainbow`,
  //   digital: `${ROOTS.ENTERTAINMENT}/digital`,
  // },
  // governance: {
  //   parental: `${ROOTS.GOVERNANCE}/parental`,
  //   partner: `${ROOTS.GOVERNANCE}/partner`,
  //   affiliation: `${ROOTS.GOVERNANCE}/affiliation`,
  //   joint: `${ROOTS.GOVERNANCE}/joint`,
  //   contract: `${ROOTS.GOVERNANCE}/contract`,
  //   kyc: `${ROOTS.GOVERNANCE}/kyc`,
  // },
  // AUTH
  auth: {
    register: `${ROOTS.AUTH}/register`,
    registerDetail: `${ROOTS.AUTH}/register-detail`,
    verify: `${ROOTS.AUTH}/verify`,
    phoneVerify: `${ROOTS.AUTH}/phone-verify`,
    newPassword: `${ROOTS.AUTH}/new-password`,
    forgotPassword: `${ROOTS.AUTH}/forgot-password`,
    kycVerify: `${ROOTS.AUTH}/kyc-verify`,
  },
  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,
  },
};
