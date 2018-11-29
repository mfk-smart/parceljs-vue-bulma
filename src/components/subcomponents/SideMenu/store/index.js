export default {
  namespaced: true,
  state: {
    isMenuOpen: true,
    menu: [
      {
        label: 'ÜRÜNLER',
        path: '',
        isActive: false,
        children: [
          {
            label: 'Güvenlik',
            path: 'security',
            isActive: false,
          },
          {
            label: 'Ses',
            path: 'audio',
            isActive: false,
          },
          {
            label: 'Yazılım',
            path: 'software',
            isActive: false,
          },
        ],
      },
      {
        label: 'HİZMETLER',
        path: '',
        isActive: false,
        children: [
          {
            label: 'Hizmet A',
            path: 'security',
            isActive: false,
          },
          {
            label: 'Hizmet B',
            path: 'audio',
            isActive: false,
          },
          {
            label: 'Hizmet C',
            path: 'software',
            isActive: false,
          },
        ],
      },
    ],
  },
  mutations: {
    close(state) {
      state.isMenuOpen = false
    },
    open(state) {
      state.isMenuOpen = true
    },
  },
}
