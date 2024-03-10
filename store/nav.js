export const state = () => ({
  menuActive: false
})

export const mutations = {
  toggle(state) {
    state.menuActive = !state.menuActive
  },
  close(state) {
    state.menuActive = false
  }
}