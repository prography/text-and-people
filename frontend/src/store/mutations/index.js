const mutations = {
  USER_LOGINING(state) {
    state.login = true;
  },

  USER_LOGINING_FINAL(state) {
    state.login = false;
  },

  POST_USER_INFO(state) {
    state.postUser = true;
  },

  POST_USER_FINAL(state) {
    state.postUser = false;
  },

  POST_OPTION_INFO(state) {
    state.postOption = true;
  },

  POST_OPTION_FINAL(state) {
    state.postOption = false;
  },
};

export default mutations;
