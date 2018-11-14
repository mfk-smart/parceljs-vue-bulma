export default {
  namespaced: true,
  state: {
    menu: [
      {
        label: 'nav_home',
        isActive: true,
        path: 'home',
      },
      {
        label: 'nav_aboutus',
        isActive: false,
        path: 'about',
      },
      {
        label: 'nav_contact',
        isActive: false,
        path: 'contact',
      },
    ],
  },
}
