export const homeNavigation = [
  { label: 'Funcionalidades', href: '/#funcionalidades' },
  { label: 'Integraciones', href: '/#integraciones' },
  { label: 'Preguntas Freqüentes', href: '/#preguntas-frequentes' },
];

export const navigation = [
  {
    title: 'Platform',
    items: [
      {
        url: '/dashboard/news',
        icon: 'ri-news-fill',
        title: 'News',
      },
      {
        url: '/dashboard/credits',
        icon: 'ri-coins-fill',
        title: 'Credits',
      },
    ],
  },
  {
    title: 'Channels',
    items: [
      {
        url: '/dashboard/google-reviews',
        icon: 'ri-google-fill',
        title: 'Google Reviews',
        items: [
          {
            url: '/dashboard/google-reviews/reviews',
            icon: 'ri-chat-1-fill',
            title: 'Reviews',
          },
          {
            url: '/dashboard/google-reviews/settings',
            icon: 'ri-settings-3-fill',
            title: 'Settings',
          },
        ],
      },
    ],
  },
];
