import Vuex from 'vuex'

export default () => {
  return new Vuex.Store({
    state: {
      items: []
    },
    mutations: {
      MERGE_ITEMS (state, items) {
        state.items = [...state.items, ...items]
      }
    }
  })
}
