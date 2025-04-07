export const paths = {
  comingSoon: '/coming-soon',
  maintenance: '/maintenance',
  pricing: '/pricing',
  payment: '/payment',
  about: '/about-us',
  courses: {
    root: `/courses`,
    details: (id) => `/courses/${id}`,
  },

  contact: '/contact-us',
  enroll: '/enroll',
  faqs: '/faqs',
  page403: '/error/403',
  page404: '/error/404',
  page500: '/error/500',
  components: '/components',
  terms: '/legal/terms-and-conditions',
  privacy: '/legal/privacy-policy',
  blog: {
    root: `/blog`,
    details: (id) => `/blog/${id}`,
  },
};
