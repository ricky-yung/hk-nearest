import { RepositoryFactory } from "../../repo/RepositoryFactory";
const NestestSchoolRepository = RepositoryFactory.get(
  "nearestSchoolRepository"
);

const state = {
  currentCat: null,
  markers: [],
};

const getters = {
  getCurrentCategory: () => {
    return state.currentCat;
  },
  getCategoryList: () => {
    return ["School"];
  },
  getMarkers: () => {
    return state.markers;
  },
};

const actions = {
  getMarker: ({ commit }, geo) => {
    NestestSchoolRepository.get(geo.lat, geo.long).then((response) => {
      commit("setMarkers", response.data);
    });
  },
};

const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
