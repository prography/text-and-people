<template>
  <div>
    <section class="section section-icons center">
      <div class="container">
        <div class="row">
          <div class="col s12 m4">
            <div class="card-panel">
              <i class="fa fa-user fa-3x deep-purple-text text-darken-2"></i>
              <h5 class="grey-text text-darken-4">Free Account</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, suscipit!</p>
            </div>
          </div>
          <div class="col s12 m4">
            <div class="card-panel">
              <i class="fa fa-database fa-3x deep-purple-text text-darken-2"></i>
              <h5 class="grey-text text-darken-4">NoSQL Databases</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, suscipit!</p>
            </div>
          </div>
          <div class="col s12 m4">
            <div class="card-panel">
              <i class="fa fa-bolt fa-3x deep-purple-text text-darken-2"></i>
              <h5 class="grey-text text-darken-4">Fast Conections</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, suscipit!</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section: About -->
    <section class="section section-about grey lighten-4">
      <div class="container">
        <div class="row">
          <div class="col s12 m6">
            <h3>
              <span class="deep-purple-text text-darken-1">About</span> Us</h3>
            <p class="flow-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid odio eum magnam aut at voluptates omnis sint reiciendis
              dolorem recusandae.</p>
          </div>
          <div class="col s12 m6">
            <img src="@/assets/img/tech.jpg" alt="" class="circle responsive-img">
          </div>
        </div>
      </div>
    </section>

    <!-- Section: Developers -->
    <section class="section section-developers white-text">
      <div class="primary-overlay valign-wrapper">
        <div class="container">
          <div class="row">
            <div class="col s12 center">
              <h3>For Developers, By Developers</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section: Languages -->
    <section class="section section-language grey lighten-4">
      <div class="container">
        <div class="row">
          <h4 class="center">Work With
            <span class="deep-purple-text text-darken-1"> Any Language</span>
          </h4>
          <br>
          <br>
          <div class="row">
            <div class="col s2">
              <img src="@/assets/img/python-logo.png" class="responsive-img" alt="">
            </div>
            <div class="col s2">
              <img src="@/assets/img/ruby-logo.png" class="responsive-img" alt="">
            </div>
            <div class="col s2">
              <img src="@/assets/img/php-logo.png" class="responsive-img" alt="">
            </div>
            <div class="col s2">
              <img src="@/assets/img/node-logo.png" class="responsive-img" alt="">
            </div>
            <div class="col s2">
              <img src="@/assets/img/c-sharp-logo.png" class="responsive-img" alt="">
            </div>
            <div class="col s2">
              <img src="@/assets/img/java-logo.png" class="responsive-img" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section: Podcast -->
    <section class="section section-podcast white-text">
      <div class="primary-overlay valign-wrapper">
        <div class="container">
          <div class="row">
            <div class="col s12 m8">
              <h4>Listen to the PAD Podcast</h4>
              <p>Every Thursday at 5pm EST</p>
            </div>
            <div class="col s12 m4">
              <a href="#" class="btn purple btn-large">
                <i class="fa fa-podcast"></i> Listen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section: Testimonial -->
    <section class="section section-testimonial grey lighten-4">
      <div class="container">
        <div class="row">
          <div class="col s12">
            <div class="carousel carousel-slider center">
              <div class="carousel-item" href="#one!">
                <h2>Testimonial 1</h2>
                <p class="flow-text">"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat assumenda ad minima reiciendis vitae fuga,
                  dicta ipsa sit maxime aperiam quo animi expedita adipisci officia hic, odio omnis temporibus earum?"
                  <p>
                    <em>- John Doe From Microsystems</em>
                  </p>
                <div class="carousel-fixed-item center hide-on-small-and-down">
                  <a href="#" class="btn grey">Read More</a>
                </div>
              </div>
              <div class="carousel-item" href="#two!">
                <h2>Testimonial 2</h2>
                <p class="flow-text">"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat assumenda ad minima reiciendis vitae fuga,
                  dicta ipsa sit maxime aperiam quo animi expedita adipisci officia hic, odio omnis temporibus earum?"
                  <p>
                    <em>- Mike SMith From Edge INC</em>
                  </p>
                <div class="carousel-fixed-item center hide-on-small-and-down">
                  <a href="#" class="btn grey">Read More</a>
                </div>
              </div>
              <div class="carousel-item" href="#three!">
                <h2>Testimonial 3</h2>
                <p class="flow-text">"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat assumenda ad minima reiciendis vitae fuga,
                  dicta ipsa sit maxime aperiam quo animi expedita adipisci officia hic, odio omnis temporibus earum?"
                  <p>
                    <em>- Karen Williams from Techsoft</em>
                  </p>
                <div class="carousel-fixed-item center hide-on-small-and-down">
                  <a href="#" class="btn grey">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'root',
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {});
  },
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
