<template>
  <div>
    <section class="section section-icons center">
      <div class="container">
        <div class="row">
          <Slider
            :items="[{
              title: 'Free Account',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, suscipit!'
            }, {
              title: 'NoSQL Databases',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, suscipit!'
            }]"
          >
          </Slider>
        </div>
      </div>
    </section>

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
          <br>
          <br>
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

export default {
  name: 'root',
  components: {
    Card,
    Slider,
    About,
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  data: () => {
    return {
      message: '안녕하세요',
    };
  },
  methods: {},
};
</script>
