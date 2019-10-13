import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    openProjects: []
  },
  getters: {
    getOpenProjects: (state) => state.openProjects
  },
  mutations: {
    addProject: (state, project) => state.openProjects.push(project)
  },
  actions: {

  },
});
