<template>
  <section class="container">
    <div class="row">
      <Slider
        :items="posts"
      />
    </div>
    <div class="row">
      <template fragment v-for="post in posts">
        <Card
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
import Card from '@/components/card/Card';
import Slider from '@/components/slider/Slider';

import { getPosts } from '@/controllers/PostsControllers';

export default {
  components: {
    Card,
    Slider,
  },
  created() {
    this.getPostsFromAPI();
  },
  data: () => {
    return {
      posts: [],
    };
  },
  methods: {
    getPostsFromAPI() {
      getPosts().then((data) => {
        this.posts = data;
      });
    },
  },
};
</script>


<style scoped>
.post-card {
  display: flex;
}
</style>

