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
          return i
        })
        state.items = [...state.items, ...items]
      },
      UPDATE_ACTIVE_STATUS (state, index) {
        state.items[index].active = !state.items[index].active
        if (state.items[index].active) {
          state.items[index].reportingTime = new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' })
          state.items[index].reportingTimeStamp = Date.now()
        } else {
          state.items[index].reportingTime = 'Absent'
          state.items[index].reportingTimeStamp = 0
        }
        
      }
    }
  })
}
