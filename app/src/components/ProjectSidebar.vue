<template>
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

<style>

</style>
