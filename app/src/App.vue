<template>
  <div class="main-grid">
     <div class="sidebar">
      <div>
        <div>
          <div class="sidebar-title">
            APOSTLE
          </div>
          <div class="project-actions">
            <button class="new-project-button project-button" @click="displayNewProjectModal()">
              <font-awesome-icon icon="plus"/><span>New Project</span>
            </button>
            <button class="open-project-button project-button" @click="displayOpenProjectDialog()">
              <font-awesome-icon icon="box-open"/><span>Open Project</span>
            </button>
            <input id="fileInput" type="file" @change="loadProject"/>
          </div>
        </div>
      </div>
        <div
          v-for="project in projects"
          :key="project.name"
          class="project"
        >
          <div>
            <div>
              <span class="project-title">{{ project.projectName }}</span>
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

    <b-modal class="new-project-modal" v-model="isModalActive" hide-footer  title="New Project">
      <div class="new-project-modal-content">
        <b-form-group
          label-cols-sm="4"
          label-cols-lg="3"
          description="This is the project name that will display in the sidebar."
          label="Project Name"
          label-for="input-horizontal"
          >
          <b-form-input id="new-project-name-input" v-model="newProjectName" @keyup.enter.prevent="saveNewProject()"></b-form-input>
        </b-form-group>
        <div class="button-container">
          <button class="modal-button btn btn-primary" @click="saveNewProject()">Ok</button>
          <button class="modal-button btn btn-outline-primary" @click="closeNewProjectModal()">Cancel</button>
        </div>
      </div>
    </b-modal>

  </div>
</template>

<script>
import Main from './components/Main';
import fs from 'fs';
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    Main,
  },
  computed: mapState([
    'openProjects'
  ]),
  watch: {
    openProjects(newValue, oldValue) {
      this.projects = newValue;
    }
  },
  data: () => ({
    isModalActive: false,
    newProjectName: null,
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
    ],
    projects: {}
  }),
  methods: {
    ...mapMutations([
      'addProject'
    ]),

    displayNewProjectModal: function(shouldDisplay) {
      this.isModalActive = true;
    },

    closeNewProjectModal: function() {
      this.isModalActive = false;
    },

    saveNewProject: function () {
      if(!this.newProjectName){
        return;
      }
      let fileName = this.newProjectName.toLowerCase().split(" ").join("-");
      let projectShell = {
        projectName: this.newProjectName,
        createdOn: new Date(),
        tests: [],
        collections: []
      }

      try {
        const data = JSON.stringify(projectShell)
        const blob = new Blob([data], {type: 'text/plain'})
        const e = document.createEvent('MouseEvents');
        const a = document.createElement('a');
        a.download = `${fileName}.json`;
        a.href = window.URL.createObjectURL(blob);
        a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
        e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        a.dispatchEvent(e);

        // Cleanup
        this.newProjectName = null;
        this.isModalActive = false;

        // TODO: Load the new project into the state
        // TODO: Load the watched files into the config state
      } catch (exc) {
        console.error('Unable to save new project', exc)
      }
    },

    displayOpenProjectDialog: function() {
      document.getElementById('fileInput').click()
    },

    loadProject: function (event) {
      console.log(event)
      let file = event.target.files[0];

      new Promise((resolve, reject) => {
        let fileReader = new FileReader();
        fileReader.readAsText(file, "UTF-8");
        fileReader.onload = function (fileReaderEvent) {
          resolve(fileReaderEvent.target.result);
        }
        fileReader.onerror = function (err) {
          reject(err);
        }
      }).then(contents => {
          let project = JSON.parse(contents)
          this.addProject(project);
        })
        .catch(err => {
          console.error(err)
        })
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

    .project-button {
      width: 100%;
      color: white;
      background: none;
      border: none;
      border-radius: 4px;
      padding: 4px;
      text-align: left;

      svg{
        width: 2rem;
        text-align: left;
      }

      span {
        margin-left: 4px;
      }

      &:hover {
        background-color: #03294d;
      }
    }

    #fileInput {
      display: none;
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

.modal-button {
  margin-right: 10px;
  border: #03294d solid 1px;
}

.modal-button.btn-primary{
  background-color:#03294d;
}

.modal-button.btn-outline-primary{
  color:#03294d;
}

.modal-button:hover{
  background-color:#094074;
  color:#eee;
}

</style>
