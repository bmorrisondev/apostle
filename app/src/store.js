import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projects: []
  },
  mutations: {

  },
  actions: {
    showNewProjectDialog: ({ state, commit }, payload) => {

    },

    createNewProject: ({ state, commit }, payload) => {
      // display dialog to show
    }
  },
});
