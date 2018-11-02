<template>
  <section class="section section-signup">
    <div class="container">
      <div class="modal-content">
        <h4 class="black-text">Sign-In</h4>
        <form autocomplete="off">
          <div class="input-field">
            <input
              type="text"
              id="sign-in-username"
              v-model.lazy.trim="username"
            >
            <label for="sign-in-username">Username</label>
          </div>
          <div class="input-field">
            <input
              type="password"
              id="sign-in-password"
              v-model.lazy.trim="password"
            >
            <label for="sign-in-password">Password</label>
          </div>
          <p class="message red-text darken-4">
            <span>{{ message }}</span>
          </p>
        </form>
      </div>
      <div class="center">
        <PreLoader :isShow="isLoading" />
      </div>
      <div class="modal-footer">
        <button
          type="submit"
          class="btn purple"
          @click="trySignIn"
        >
          Sign-In
        </button>
        <button
          type="button"
          class="btn red modal-close"
        >
          Cancel
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import Cookies from 'js-cookie';

import EventBus from '@/utils/EventBus';
import { signIn } from '@/controllers/AuthenticationControllers';

import PreLoader from '@/components/preloader/PreLoader';

export default {
  components: {
    PreLoader,
  },
  data: () => {
    return {
      username: 'hello',
      password: 'hello',
      message: '',
      isLoading: false,
    };
  },
  methods: {
    trySignIn() {
      signIn({
        username: this.username,
        password: this.password,
      })
        .then(({ data, message }) => {
          this.isLoading = true;
          setTimeout(() => {
            if (data.token) {
              EventBus.$emit('checkLogin', data);
              this.$router.push('/');
            } else {
              this.message = message;
            }
            this.isLoading = false;
          }, 1000);
        })
        .catch(({ message }) => {
          this.message = message;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.section {
  padding: 80px 0 70px;
}
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

