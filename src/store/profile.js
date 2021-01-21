export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    sentProfile() {
      return new Promise((resolve) => {
        return resolve()
      })
      .then(() => {
        console.log('submit form')
        return true
      })
      .catch((error) => {
        console.log(error)
      })
    }
  },
  getters: {}
}