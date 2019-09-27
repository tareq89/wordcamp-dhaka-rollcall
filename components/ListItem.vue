<template>
  <div :class="['VolunteerList__item', {'VolunteerList__item--active': item.active}, {'VolunteerList__item--unknown': !item.known}]">
    <div class="VolunteerList__imageWrapper">
      <a :href="item.facebookProfileLink" target="_blank">
        <img v-if="item.image" :src="`${item.image}`" :alt="item.name">
      </a>
    </div>
    <div class="VolunteerList__copy">
      <a class="VolunteerList__name" :href="`tel:+${item.phoneNumber}`">{{ item.name }}</a>
      <div class="VolunteerList__bio">{{ item.bio }}</div>
      <div class="VolunteerList__expectedreporting">{{ item.expectedreportingTime }}</div>
      <div class="VolunteerList__reporting">{{ item.reportingTime }}</div>
    </div>
    <div class="VolunteerList__status" @click="$emit('toggleActivate', item.id)"></div>
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>