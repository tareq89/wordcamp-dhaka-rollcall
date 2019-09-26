<template>
  <div :class="['VolunteerList__item', {'VolunteerList__item--active': item.active}, {'VolunteerList__item--unknown': item.known}]">
    <div class="VolunteerList__imageWrapper">
      <img src="~/assets/images/Saif_Hassan.jpg" :alt="item.name">
    </div>
    <div class="VolunteerList__copy">
      <a class="VolunteerList__name" :href="`tel:+${item.phoneNumber}`">{{ item.name }}</a>
      <div class="VolunteerList__bio">{{ item.bio }}</div>
      <div class="VolunteerList__reporting">6:30 am</div>
    </div>
    <div class="VolunteerList__status"></div>
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>