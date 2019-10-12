<template>
  <div class="main-grid">
     <div class="sidebar">
      <div>
        <div>
          <div class="sidebar-title">
            APOSTLE
          </div>
            <button class="btn btn-primary" @click="displayNewProjectModal()">Test</button>
            <b-button v-b-modal.modal-1>Launch demo modal</b-button>
        </div>
      </div>
        <div
          v-for="project in testProjects"
          :key="project.name"
          class="project"
        >
          <!-- <v-list-item-icon>
            <font-awesome-icon icon="angle-right" />
          </v-list-item-icon> -->

          <div>
            <div>
              <span class="project-title">{{ project.name }}</span>
            </div>
            <div dense class="project-list-container">
              <div class="test" v-for="test in project.tests" :key="test.name">
                <span class="project-test-title">{{test.name}}</span>
              </div>
            </div>
            <div >
              <div class="collection" v-for="collection in project.collections" :key="collection.name">
                <span class="project-test-collection-title">{{collection.name}}</span>
                <div class="project-test-collection-container">
                  <div class="menu-list test-list">
                    <div class="test" v-for="test in collection.tests" :key="test.name">
                      <span class="project-test-title">{{test.name}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>

    <div class="content">
      <Main/>
    </div>

    <b-modal ref="modal-1" title="BootstrapVue">
      <p class="my-4">Hello from modal!</p>
    </b-modal>

  </div>
</template>

<script>
import Main from './components/Main';

export default {
  name: 'App',
  components: {
    Main,
  },
  data: () => ({
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
  methods: {
    displayNewProjectModal: function(shouldDisplay) {
      console.log('yes')
      this.$refs['modal-1'].show();
    }
  }
};
</script>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

html {
  overflow: auto !important;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

html::-webkit-scrollbar {
  width: 0;
  height: 0;
}

html, body {
  height: 100%;
  width: 100%;
  padding: 0px;
  margin: 0px;
  font-family: 'Open Sans', sans-serif;
}

.main-grid {
  display: inline-grid;
  grid-auto-columns: min-content 1fr auto;
  background-color: #eee;
  height: 100%;
  width: 100%;
  padding: 0px;
  margin: 0px;

  .sidebar {
    width: 250px;
    padding: 20px;
    background-color: #094074 !important;
    color: white;

    .sidebar-title {
      font-size: 32px;
      margin-bottom: 12px;
    }

    .project-list-container {
      span {
        font-size: 16px;
      }
    }

    .project-title {
      font-size: 22px;
      font-weight: bold;
    }

    .project-test-collection-container {
      margin-left: 12px;
      .project-test-title {
        margin-left: 8px;
      }
    }

    .project-test-collection-title {
      margin-left: 8px;
      font-weight: bold;
    }
  }

  .content {
    grid-column: 2
  }
}
</style>
