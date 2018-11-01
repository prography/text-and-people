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
            <li>
              <router-link to="/sign-up">SignUp</router-link>
            </li>
            <li>
              <a
                class="btn purple modal-trigger"
                href="#modal1"
                @click="toggleModal"
              >
                SignIn
              </a>
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
            <li>
              <a href="signup.html">
                <i class="fa fa-users grey-text text-darken-4"></i> Sign Up</a>
            </li>
            <li>
              <div class="divider"></div>
            </li>
            <li>
              <a
                class="btn purple modal-trigger"
                href="#modal1"
                @click="toggleModal"
              >
                SignIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Modal Structure -->
    <div id="modal1" class="modal">
      <SignIn />
    </div>
  </header>
</template>

<script>
import SignIn from '@/views/auth/SignIn';

export default {
  components: {
    SignIn,
  },
  data: () => {
    return {
      message: '안녕하세요',
    };
  },
  methods: {
    toggleModal() {
      /* eslint-disable */
      const elems = document.querySelectorAll('.modal');
      const instances = M.Modal.init(elems, {});
      /* eslint-enable */
    },
  },
};
</script>
