<template>
  <section id="SignIn">
    <div class="modal-content">
      <h4 class="black-text">Sign-In</h4>
      <form autocomplete="off">
        <div class="input-field">
          <input
            type="email"
            id="email"
            v-model.lazy.trim="email"
          >
          <label for="email">Email</label>
        </div>
        <div class="input-field">
          <input
            type="password"
            id="password"
            v-model.lazy.trim="password"
          >
          <label for="password">Password</label>
        </div>
      </form>
    </div>
    <div class="modal-footer">
      <button
        type="submit"
        class="btn purple"
      >
        Signup
      </button>
      <button
        type="button"
        class="btn red modal-close"
      >
        Cancel
      </button>
    </div>
  </section>
</template>

<script>
import Cookies from 'js-cookie';

export default {
  components: {},
  data: () => {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    afterSuccessSignIn(token) {
      Cookies.set('pad-token', token, { expires: 7 });
    },
  },
};
</script>

<style lang="scss" scoped>
#SignIn {
  form {
    margin: 40px 20px 0;
  }
  .modal-footer {
    button {
      margin: 5px;
    }
  }
}
</style>

