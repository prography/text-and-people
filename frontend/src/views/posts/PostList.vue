<template>
  <section class="container">
    <PreLoader
      :isShow='loading'
      v-if="loading"
    />
    <div
      class="row"
      v-else
    >
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
      <!-- <PostSlider
        :items="posts"
        :descriptionKey="'author'"
        :imageKey="'mainImage'"
      /> -->
      <section id='posts-section'>
        <template fragment v-for="(post, i) in posts">
          <PostCard
            class="post-card"
            :key="`${post._id}-${i}`"
            :title="post.title"
            :description="post.author"
            :image="post.mainImage"
          />
        </template>
      </section>
    </div>
  </section>
</template>

<script>
import Slider from '@/components/slider/Slider';
import { PostCard, PostSlider } from '@/containers/posts';
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
    this.handleGetPosts();
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
      loading: true,
      scrollPage: 0,
    };
  },
  methods: {
    handleScrollGettingPosts() {
      const bodyHeight = document.getElementById('posts-section').clientHeight;
      const scrollPercentage = window.scrollY / bodyHeight;
      if (scrollPercentage > 0.95) {
        this.scrollPage = this.scrollPage + 1;
        this.handleGetPosts(this.scrollPage);
      }
    },
    handleGetPosts(page) {
      getPosts(page).then((data) => {
        this.posts = [...this.posts, ...data];
        console.error(this.posts.length);
        this.loading = false;
      });
    },
    handleGetPopularPosts(page) {
      // getPopularPosts().then((data) => {
      getPupularPosts(page).then((data) => {
        this.popularPosts = data;
        this.loading = false;
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

