<template>
  <div class="App">
    <header class="App__header">
      <div class="Logo">
        <img src="~/assets/images/logo.jpg" alt="Logo">
      </div>
      <div class="Heading">Volunteer List</div>
    </header>
    <main class="App__main">
      <div class="Search">
        <input class="Search__input" placeholder="Search" type="text" @input="updateSearchKey">
      </div>
      <div class="VolunteerList" id="VolunteerList">
        <list-item div v-for="(item, key) of items" :key="key" :item="item"></list-item>
      </div>
    </main>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import ListItem from '~/components/ListItem.vue'
import items from '~/store/list.json'
export default {
  data () {
    return {
      searchKey: null
    }
  },
  components: {
    Logo,
    ListItem
  },
  computed: {
    items () {
      if (this.searchKey) {
        return items.filter(a => a.name.toLowerCase().includes(this.searchKey.toLowerCase()))
      }
      return items
    }
  },
  methods: {
    updateSearchKey ($event) {
      this.searchKey = $event.target.value

    }
  }
}
</script>
