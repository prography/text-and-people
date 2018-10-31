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
      <PostSlider
        :items="posts"
        :descriptionKey="'author'"
        :imageKey="'mainImage'"
      />
      <template fragment v-for="post in posts">
        <PostCard
          class="post-card"
          :key="post._id"
          :title="post.title"
          :description="post.author"
          :image="post.mainImage"
        />
      </template>
    </div>
  </section>
</template>

<script>
import Slider from '@/components/slider/Slider';
import { PostCard, PostSlider } from '@/containers/posts';
import PreLoader from '@/components/preloader/PreLoader';

import { getPosts } from '@/controllers/PostsControllers';

export default {
  components: {
    PostCard,
    PreLoader,
    PostSlider,
    Slider,
  },
  created() {
    this.getPostsFromAPI();
    this.getPopularPostsFromAPI();
  },
  data: () => {
    return {
      posts: [],
      popularPosts: [],
      loading: true,
    };
  },
  methods: {
    getPostsFromAPI() {
      getPosts().then((data) => {
        this.posts = data;
        this.loading = false;
      });
    },
    getPopularPostsFromAPI() {
      // getPopularPosts().then((data) => {
      getPosts().then((data) => {
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

