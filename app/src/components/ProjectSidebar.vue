<template>
  <div class="sidebar">
    <div class="sidebar-upper">
      <div class="panel">
        <div class="panel-header">
          Open Requests
        </div>
        <div class="panel-body">
          requests go here...
        </div>
      </div>
    </div>
    <div class="sidebar-lower">
      <div class="panel">
        <div class="panel-header">
          Projects
        </div>
        <div class="panel-body">
          Open a Project
        </div>
        <div class="panel-body-excluded">
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
          </div> <!--/projects -->
        </div>
      </div>
    </div>
    <div class="sidebar-footer">
      user functions, footer stuffs
    </div>
  </div>
</template>

<script>

import fs from 'fs';
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
export default {
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

<style lang="scss" scoped>
.sidebar {
  display: grid;
  grid-auto-rows: min-content auto 50px;
  height: 100%;

  .sidebar-upper {
    grid-row: 1;
  }

  .sidebar-lower{
    grid-row: 2;
  }

  .sidebar-footer {
    grid-row: 3;
    height: 50px;
    background-color: blue;
  }
}
.panel {
  height: 100%;

  .panel-header {
    height: 24px;
    background-color: #333;
    color: #ddd;
    font-size: 12px;
    padding: 2px;
  }

  .panel-body {
    background-color: #444;
    padding: 2px;
    height: 100%;
  }
}
</style>