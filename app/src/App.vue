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
        <v-list-item
          v-for="project in testProjects"
          :key="project.name"
        >
          <!-- <v-list-item-icon>
            <font-awesome-icon icon="angle-right" />
          </v-list-item-icon> -->

          <v-list-item-content>
            <v-list-item-title>
              <b>{{ project.name }}</b>
            </v-list-item-title>
            <v-list dense class="menu-list test-list">
              <v-list-item class="test" v-for="test in project.tests" :key="test.name">
                <v-list-item-content>
                  {{test.name}}
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-list dense class="menu-list collection-list">
              <v-list-item class="collection" v-for="collection in project.collections" :key="collection.name">
                <v-list-item-content>
                  <b>{{collection.name}}</b>
                  <v-list class="menu-list test-list">
                    <v-list-item class="test" v-for="test in collection.tests" :key="test.name">
                      <v-list-item-content>
                        {{test.name}}
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-list-item-content>
        </v-list-item>
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
    ],
    testProjects: [
      {
        name: "Enviari API",
        description: "An API to streamline shipping product around the world.",
        tests: [
          {
            name: "Get Customers",
            method: "GET",
            uri: "https://api.notarealsite.com/customers"
          },
          {
            name: "Post Customers",
            method: "POST",
            uri: "https://api.notarealsite.com/customers"
          },
          {
            name: "Put Customers",
            method: "PUT",
            uri: "https://api.notarealsite.com/customers"
          }
        ],
        collections: [
          {
            name: "Shipments",
            tests: [
              {
                name: "Get Shipments",
                method: "GET",
                uri: "https://api.notarealsite.com/shipments"
              },
              {
                name: "Post Shipments",
                method: "POST",
                uri: "https://api.notarealsite.com/shipments"
              },
              {
                name: "Put Shipments",
                method: "PUT",
                uri: "https://api.notarealsite.com/shipments"
              }
            ]
          }
        ]
      }
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
