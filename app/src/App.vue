<template>
  <div class="main-grid">
    <div class="topbar">
      <TopBar />
    </div>
    <div class="project-sidebar">
      <ProjectSidebar />
    </div>
    <div class="main-content">
      <Main/>
    </div>
    <div class="request-options-sidebar">
      <OptionsSidebar />
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
import TopBar from './components/TopBar';
import ProjectSidebar from './components/ProjectSidebar';
import OptionsSidebar from './components/OptionsSidebar';

import fs from 'fs';
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    Main,
    TopBar,
    ProjectSidebar,
    OptionsSidebar
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
  padding: 0px;
  margin: 0px;
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
}

.main-grid {
  display: grid;
  grid-auto-rows: min-content 1fr auto;
  grid-auto-columns: min-content 3fr;
  background-color: #222;
  height: 100%;
  width: 100vw;
  padding: 0px;
  margin: 0px;

  .topbar {
    grid-column: 2;
    grid-row: 1;
    height: 55px;
  }

  .project-sidebar {
    grid-column: 1;
    grid-row: 2;
    width: 250px;
    background-color: #094074 !important;
    color: white;

    // .sidebar-title {
    //   font-size: 32px;
    //   margin-bottom: 12px;
    // }

    // .project-button {
    //   width: 100%;
    //   color: white;
    //   background: none;
    //   border: none;
    //   border-radius: 4px;
    //   padding: 4px;
    //   text-align: left;

    //   svg{
    //     width: 2rem;
    //     text-align: left;
    //   }

    //   span {
    //     margin-left: 4px;
    //   }

    //   &:hover {
    //     background-color: #03294d;
    //   }
    // }

    #fileInput {
      display: none;
    }
  }

  .main-content {
    background-color: green;
    width: 100%;
    grid-column: 2;
    grid-row: 2;
  }

  .request-options-sidebar {
    width: 250px;
    background-color: orange;
    grid-column: 3;
    grid-row: 2;
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
