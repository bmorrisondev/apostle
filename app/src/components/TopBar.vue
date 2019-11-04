<template>
  <div class='grid-top'>
    <div class="omnibar">
      <select class="method-select">
        <option v-for="method in httpMethods" :key="method">{{method}}</option>
      </select>
      <input class="address-input" type="text" placeholder="API Endpoint Address">
      <button class="address-submit">
          <font-awesome-icon icon="search" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [],
    httpMethods: [
      'GET',
      'POST',
      'PUT',
      'PATCH',
      'DELETE'
    ]
  }),
}
</script>

<style lang="scss" scoped>
.omnibar {
  padding: 12px;
}
</style>
