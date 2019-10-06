<template>
  <v-container ma-0 pa-0 class="body-main-container">
      <v-app-bar class="address-bar">
        <v-select
          :items="httpMethods"
          label="Method"
          class="http-method-select"></v-select>
        <v-text-field label="API Endpoint Address"></v-text-field>
      </v-app-bar>
    <div style="display: flex; flex-direction: row; width: 100%; height: 100%; position: absolute; align-items: stretch;">
      <div class="left-pane">
        left pane
      </div>
      <div class="right-pane">
        right pane
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: []
  }),
};
</script>

<style scoped>
.address-bar {
  z-index: 9999;
}
.left-pane {
  background-color: red;
  flex: 20;
}
.right-pane {
  background-color: green;
  flex: 80;
}
.body-main-container {
  position: relative;
  height: 100%;
  align-items: stretch;
}
.body-sub-container {
  height: 100%
}
.body-main-row {
  height: 100%;
}
.body-container {
  height: 100%;
}
</style>
