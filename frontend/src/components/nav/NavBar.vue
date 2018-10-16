<template>
  <header class="main-header">
    <nav class="transparent">
      <div class="container">
        <div class="nav-wrapper">
          <router-link to="/" class="brand-logo">
            Post and Developer
          </router-link>
          <!-- <a href="#" data-activates="mobile-nav" class="button-collapse">
            <i class="fa fa-bars"/>
          </a> -->
          <ul class="right hide-on-med-and-down">
            <li>
              <router-link to="/">Main</router-link>
            </li>
            <li>
              <router-link to="/about">About</router-link>
            </li>
            <li>
              <a href="signup.html">Sign Up</a>
            </li>
            <li>
              <a href="#login-modal" class="btn purple modal-trigger">Login</a>
            </li>
            <li>
              <a href="https://facebook.com">
                <i class="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://instagram.com">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
          <!-- <ul class="side-nav" id="mobile-nav">
            <h4 class="purple-text text-darken-4 center">Quazzu</h4>
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
          </ul> -->
        </div>
      </div>
    </nav>
    <div class="showcase container">
      <div class="row">
        <div class="col s12 m10 offset-m1 center">
          <h5>Welcome To Quazzu</h5>
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
import $ from 'jquery';

export default {
  name: 'root',
  data: () => {
    return {
      message: '안녕하세요',
    };
  },
  mounted() {
    $('.carousel.carousel-slider').carousel({ fullWidth: true });
    $('.button-collapse').sideNav();
    $('.modal').modal();
  },
  methods: {},
  computed: {
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
