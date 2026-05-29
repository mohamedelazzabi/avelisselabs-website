export const siteConfig = {
  name: "Avelisse Labs LLC",
  shortName: "Avelisse Labs",
  domain: "avelisselabs.com",
  url: "https://avelisselabs.com",
  supportEmail: "support@avelisselabs.com",
  address: "30 N Gould St Ste R, Sheridan, WY, United States, Wyoming",
  social: {
    x: "https://x.com/avelisselabs",
    instagram: "https://www.instagram.com/avelisselabs",
    facebook: "https://www.facebook.com/share/1EVQQvazDn/",
  },
  description:
    "Avelisse Labs creates mobile apps for health, wellness, family life, AI assistance, and everyday tracking.",
  nav: [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Our Apps", href: "/#apps" },
    { label: "Vision", href: "/#vision" },
    { label: "Contact", href: "/#contact" },
  ],
} as const;

export const appFeatures = [
  "Baby growth",
  "Week tracker",
  "Kick counter",
  "Weight tracker",
  "Mood tracking",
  "Contraction timer",
  "AI assistant",
] as const;

export const pregnancyScreens = [
  {
    title: "Baby Development",
    label: "Week-by-week growth",
    src: "/screens/pregnancy-development.png",
    alt: "Pregnancy app dashboard showing baby development, due date, and growth measurements",
  },
  {
    title: "Trimester Chart",
    label: "Pregnancy timeline",
    src: "/screens/pregnancy-trimester-chart.png",
    alt: "Pregnancy app trimester chart showing months and weeks",
  },
  {
    title: "Journal",
    label: "Sweet moments",
    src: "/screens/pregnancy-journal.png",
    alt: "Pregnancy journal screen with bump progress, mood, and timeline",
  },
  {
    title: "Kick Counter",
    label: "Movement tracking",
    src: "/screens/kick-counter.png",
    alt: "Kick counter screen showing active session, recorded kicks, and finish session button",
  },
  {
    title: "AI Assistant",
    label: "Personal guidance",
    src: "/screens/ai-assistant.png",
    alt: "AI assistant screen with pregnancy insights and health and wellness cards",
  },
  {
    title: "Weight Tracker",
    label: "Health trends",
    src: "/screens/weight-tracker.png",
    alt: "Weight tracker screen showing current weight, trend chart, and pregnancy insight",
  },
] as const;
