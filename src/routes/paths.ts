
const ROOTS = {
  AUTH: '/auth',
  AUTH_DEMO: '/auth-demo',
  DASHBOARD: '/dashboard',
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
  components: '/components',
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
