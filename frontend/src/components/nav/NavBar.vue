<template>
  <header
    class="main-header"
    :class="[isRoot ? '': 'root-header']"
  >
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
              <router-link to="/about">About</router-link>
            </li>
            <li>
              <router-link to="/sign-up">SignUp</router-link>
            </li>
            <li>
              <router-link
                to="/sign-in"
                class="btn purple modal-trigger"
              >
                SignIn
              </router-link>
            </li>
          </ul>
          <ul class="sidenav" id="mobile-nav">
            <h4 class="purple-text text-darken-4 center">PAD</h4>
            <li>
              <div class="divider"></div>
            </li>
            <li>
              <a href="index.html">
                <i class="fa fa-home grey-text text-darken-4"></i> Home</a>
            </li>
            <li>
              <a href="solutions.html">
                <i class="fa fa-cog grey-text text-darken-4"></i> Solutions</a>
            </li>
            <li>
              <a href="signup.html">
                <i class="fa fa-users grey-text text-darken-4"></i> Sign Up</a>
            </li>
            <li>
              <div class="divider"></div>
            </li>
            <li>
              <a href="#" class="btn purple">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="showcase container" v-if="isRoot">
      <div class="row">
        <div class="col s12 m10 offset-m1 center">
          <h5>Welcome To PAD</h5>
          <h1>Build For The Future</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit fugit deserunt quos provident aliquam inventore.</p>
          <br>
          <br>
          <a href="solutions.html" class="btn btn-large white purple-text">Learn More</a>
          <a href="signup.html" class="btn btn-large purple white-text">Sign Up</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  mounted() {},
  data: () => {
    return {
      message: '안녕하세요',
    };
  },
  methods: {},
  computed: {
    isRoot: function() {
      return this.$route.path === '/';
    },
    // 계산된 getter
    reversedMessage: function() {
      // `this` 는 vm 인스턴스를 가리킵니다.
      return this.message
        .split('')
        .reverse()
        .join('');
    },
  },
};
</script>

<style scoped>
.root-header {
  min-height: 50px;
}
</style>

