<template>
  <section class="container">
    <div
      class="fixed-action-btn"
      @click="goToTop"
    >
      <a class="btn-floating btn-large blue-grey lighten-5">
        <i class="large material-icons purple-text">arrow_upward</i>
      </a>
    </div>
    <div class="row">
      <div class="posts-slider">
        <Slider
          :items="popularPosts"
          :imageKey="'mainImage'"
          :titleKey="'title'"
          :descriptionKey="'content'"
          :height="400"
        >
        </Slider>
      </div>
      <PostSlider
        :items="posts"
        :descriptionKey="'author'"
        :imageKey="'mainImage'"
      />
      <section id='posts-section'>
        <template fragment v-for="(post, i) in posts">
          <PostCard
            class="post-card"
            :key="`${post.id}-${i}`"
            :title="post.title"
            :description="post.author"
            :image="post.mainImage"
          />
        </template>
        <div class="center">
          <PreLoader :isShow='isGettingPosts' />
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import _ from 'lodash';

import { PostCard, PostSlider } from '@/containers/posts';

import Slider from '@/components/slider/Slider';
import PreLoader from '@/components/preloader/PreLoader';

import { getPosts, getPupularPosts } from '@/controllers/PostsControllers';

export default {
  components: {
    PostCard,
    PreLoader,
    PostSlider,
    Slider,
  },
  created() {
    this.handleDebouncedGetPosts();
    this.handleGetPopularPosts();
  },
  mounted() {
    window.addEventListener('scroll', this.handleScrollGettingPosts);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScrollGettingPosts);
  },
  data: () => {
    return {
      posts: [],
      popularPosts: [],
      scrollPage: 0,
      isGettingPosts: false,
    };
  },
  methods: {
    goToTop() {
      window.scrollTo(0, 0);
    },
    handleScrollGettingPosts() {
      const bodyHeight = document.getElementById('posts-section').clientHeight;
      const scrollPercentage = window.scrollY / bodyHeight;
      if (scrollPercentage > 0.95) {
        this.scrollPage = this.scrollPage + 1;
        this.handleDebouncedGetPosts(this.scrollPage);
      }
    },
    setPosts(data) {
      this.posts = [...this.posts, ...data];
      this.isGettingPosts = false;
    },
    handleDebouncedGetPosts: _.throttle(function(page) {
      getPosts({ page }).then((data) => {
        this.isGettingPosts = true;
        setTimeout(() => {
          this.setPosts(data);
        }, 500);
      });
    }, 500),
    handleGetPopularPosts(page) {
      // getPopularPosts().then((data) => {
      getPupularPosts(page).then((data) => {
        this.popularPosts = data;
      });
    },
  },
};
</script>


<style scoped>
.posts-slider {
  margin: 10px 0;
}
.post-card {
  display: flex;
}
</style>

