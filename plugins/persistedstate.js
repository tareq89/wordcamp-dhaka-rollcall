import createPersistedState from 'vuex-persistedstate'
import items from '~/store/list.json'
export default ({store, isHMR, redirect, route, params}) => {
  window.onNuxtReady((nuxt) => {
    if (isHMR) return
    createPersistedState({ paths: ['items'] })(store)

    let updatedItems
    if (store.state.items.length > 0) {
      updatedItems = items.filter(item => {
        let found = false
        for (let sItem of store.state.items) {
          if (item.id === sItem.id) {
            found = true
            break
          }
        }
        return !found
      })
    } else {
      updatedItems = items
    }
    store.commit('MERGE_ITEMS', updatedItems)
  })
}