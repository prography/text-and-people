<template>
  <header class="main-header">
    <nav class="transparent">
      <div class="container">
        <div class="nav-wrapper">
          <router-link to="/" class="brand-logo">
            Posts and Developers
          </router-link>
          <a href="#" data-activates="mobile-nav" class="button-collapse">
            <!-- <i class="fa fa-bars"/> -->
          </a>
          <ul class="right hide-on-med-and-down">
            <li>
              <router-link to="/">Main</router-link>
            </li>
            <li>
              <router-link to="/posts">Posts</router-link>
            </li>
            <li>
              <router-link to="/editor">Editor</router-link>
            </li>
            <li v-show="!isLogined">
              <router-link to="/sign-up">SignUp</router-link>
            </li>
            <li v-show="!isLogined">
              <router-link to="/sign-In">SignIn</router-link>
            </li>
            <li v-show="isLogined">
              <button
                class="btn red"
                @click="logout"
              >
                LogOut
              </button>
            </li>
          </ul>
          <ul class="sidenav" id="mobile-nav">
            <h4 class="purple-text text-darken-4 center">PAD</h4>
            <li>
              <div class="divider"></div>
            </li>
            <li>
              <router-link to="/">Main</router-link>
            </li>
            <li>
              <router-link to="/posts">Posts</router-link>
            </li>
            <li>
              <router-link to="/editor">Editor</router-link>
            </li>
            <li>
              <router-link to="/sign-up">SignUp</router-link>
            </li>
            <li v-show="!isLogined">
              <router-link to="/sign-In">SignIn</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import EventBus from '@/utils/EventBus';
import Cookies from 'js-cookie';

export default {
  mounted() {
    const token = Cookies.get();
    if (token) {
      this.isLogined = true;
    } else {
      this.isLogined = false;
    }

    EventBus.$on('checkLogin', (user) => {
      if (user.token) {
        this.isLogined = true;
      } else {
        this.isLogined = false;
      }
    });
  },
  data: () => {
    return {
      isLogined: false,
    };
  },
  methods: {
    logout() {
      Cookies.remove('pad-token');
      this.isLogined = false;
    },
  },
};
</script>
