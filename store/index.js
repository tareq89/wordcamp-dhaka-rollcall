import Vuex from 'vuex'

export default () => {
  return new Vuex.Store({
    state: {
      items: []
    },
    mutations: {
      MERGE_ITEMS (state, items) {
        items = items.map(i => {
          i.reportingTimeStamp = 0
          i.reportingTime = null
          return i
        })
        state.items = [...state.items, ...items]
      },
      UPDATE_ACTIVE_STATUS (state, id) {
        const index = state.items.findIndex(i => i.id === id)
        console.log(index)
        state.items[index].active = !state.items[index].active
        if (state.items[index].active) {
          state.items[index].reportingTime = new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' })
          state.items[index].reportingTimeStamp = Date.now()
        } else {
          state.items[index].reportingTime = null
          state.items[index].reportingTimeStamp = 0
        }
        
      }
    }
  })
}
