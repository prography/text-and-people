<template>
  <div>
    <Slider :items="banners" />

    <!-- Section: Developers -->
    <section class="section section-developers white-text">
      <div class="primary-overlay valign-wrapper">
        <div class="container">
          <div class="row">
            <div class="col s12 center">
              <h4>For Developers, By Developers, Of Developers Platform</h4>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section: Languages -->
    <section class="section section-language grey lighten-4">
      <div class="container">
        <div class="row">
          <h4 class="center">Built By
            <span class="deep-purple-text text-darken-1"> Any Language</span>
          </h4>
          <div class="row">
            <h5>BackEnd</h5>
            <div class="col s2">
              <img src="@/assets/img/python-logo.png" class="responsive-img" alt="">
            </div>
            <div class="col s2">
              <img src="@/assets/img/node-logo.png" class="responsive-img" alt="">
            </div>
          </div>
          <div class="row">
            <h5>FrontEnd</h5>
            <div class="col s2">
              <img src="@/assets/img/python-logo.png" class="responsive-img" alt="">
            </div>
            <div class="col s2">
              <img src="@/assets/img/node-logo.png" class="responsive-img" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section: About -->
    <section class="section section-about grey lighten-4">
      <About />
    </section>
  </div>
</template>

<script>
import Card from '@/components/card/Card';
import Slider from '@/components/slider/Slider';
import About from '@/containers/about/About';

import { getBanners } from '@/controllers/BannersControllers';

export default {
  name: 'root',
  components: {
    Card,
    Slider,
    About,
  },
  beforeCreate() {},
  created() {
    this.getBannersFromAPI();
  },
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  data: () => {
    return {
      banners: [],
    };
  },
  methods: {
    getBannersFromAPI() {
      getBanners().then((data) => {
        this.banners = data;
      });
    },
  },
};
</script>
