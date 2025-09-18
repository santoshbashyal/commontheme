export const endpoints = {
  auth: {
    login: "/login",
  },
  settings: {
    getsettings: "/settings",
    postsettings: "/settings/update",
  },
  heroSection: {
    getHeroSection: "/hero-section/1",
    postHeroSection: "/hero-section",
  },
  disclaimer: {
    getDisclaimer: "/disclaimer",
    postDisclaimer: "/disclaimer",
  },
  privacy: {
    getPrivacyPolicy: "/privacy-policy",
    postPrivacyPolicy: "/privacy-policy",
  },
  cookie: {
    getCookiePolicy: "/cookie-policy",
    postCookiePolicy: "/cookie-policy",
  },
  contacts: {
    getAllContacts: "/contacts",
  },
};
