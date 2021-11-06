import axios from 'axios';

export default {
  state() {
    return {
      users: {},
    };
  },
  getters: {
    users(state) {
      return state.users;
    },
  },
  mutations: {
    setUsers(state, usersAll) {
      state.users = usersAll;
    },
  },
  actions: {
    async getAllUsers({ commit }) {
      const allUsers = await axios(
        'https://i0me-ae237-default-rtdb.europe-west1.firebasedatabase.app/users.json'
      );
      commit('setUsers', { ...allUsers.data });
    },
  },
};
