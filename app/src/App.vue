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
      <v-app-bar class="address-bar">
        <v-select
          :items="httpMethods"
          label="Method"
          class="http-method-select"
        ></v-select>
        <v-text-field
          label="API Endpoint Address"
          ></v-text-field>
         <!-- <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          ></v-text-field> -->
      </v-app-bar>
      <v-navigation-drawer>
        <v-list-item>
          Test config settings here...
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
        <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld,
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

<style>
html {
  overflow: auto !important;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

html::-webkit-scrollbar {
  width: 0;
  height: 0;
}
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
