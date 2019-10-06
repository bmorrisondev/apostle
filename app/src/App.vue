<template>
  <v-app>
     <v-navigation-drawer app permanent class="app-drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title app-title">
            APOSTLE
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-content>
        <Main/>
    </v-content>
  </v-app>
</template>

<script>
import Main from './components/Main';

export default {
  name: 'App',
  components: {
    Main,
  },
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
};
</script>

<style scoped>
.app-drawer {
  background-color: #094074 !important;
}
.app-title {
  color: white;
}
.address-bar {
  z-index: 9999;
}
.http-method-select {
  max-width: 200px;
}
</style>
