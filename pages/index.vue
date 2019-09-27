<template>
  <div class="App">
    <header class="App__header">
      <div class="Logo">
        <img src="~/assets/images/logo.jpg" alt="Logo">
      </div>
      <div class="Heading">Volunteer List</div>
    </header>
    <main class="App__main">
      <div class="Heading">Sort by</div>
      <div>
        <select v-model="sortBy">
          <option v-for="(sortParam, key) of sortParams" :key="key" :value="sortParam.value" :selected="sortParam.selected">{{ sortParam.display }}</option>
        </select>
      </div>
      <div class="Search">
        <input class="Search__input" placeholder="Search" type="text" @input="updateSearchKey">
      </div>
      <div class="VolunteerList" id="VolunteerList">
        <list-item div v-for="(item, key) in items" :key="key" :item="item" :index="key" @toggleActivate="activeItem"></list-item>
      </div>
    </main>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import ListItem from '~/components/ListItem.vue'
export default {
  data () {
    return {
      searchKey: null,
      sortBy: 'name',
      sortParams: [
        {
          display: 'Name',
          value: 'name',
          selected: true
        }, 
        {
          display: 'Active',
          value: 'active',
          selected: false
        }, 
        {
          display: 'Known',
          value: 'known',
          selected: false
        }, 
        {
          display: 'Reporting',
          value: 'reportingTimeStamp',
          selected: false
        }
      ]
    }
  },
  components: {
    Logo,
    ListItem
  },
  computed: {
    sortedItems () {

    },
    items () {
      let items = []
      if (this.searchKey) {
        items = this.$store.state.items.filter(a => {
          return a.name.toLowerCase().includes(this.searchKey.toLowerCase())
        })
      } else {
        items = this.$store.state.items
      }
      return items.sort((a, b) => {
        if (this.sortBy === 'name') {
          if (a[this.sortBy][0] > b[this.sortBy][0]) return 1
          if (a[this.sortBy][0] < b[this.sortBy][0]) return -1
        } else {
          if (a[this.sortBy] > b[this.sortBy]) return -1
          if (a[this.sortBy] < b[this.sortBy]) return 1
        }
        return 0
      })
    }
  },
  methods: {
    updateSearchKey ($event) {
      this.searchKey = $event.target.value
    },
    activeItem (index) {
      this.$store.commit('UPDATE_ACTIVE_STATUS', index)
    }
  }
}
</script>
