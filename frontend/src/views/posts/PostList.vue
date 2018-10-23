<template>
  <section class="container">
    <div class="row">
      <FeaturedCardList
        :posts="posts"
      />
    </div>
    <div class="row">
      <template fragment v-for="post in posts">
        <PostCard
          class="post-card"
          :key="post._id"
          :post="post"
        />
      </template>
    </div>
  </section>
</template>

<script>
import PostCard from '@/components/posts/PostCard';
import FeaturedCardList from '@/components/posts/FeaturedCardList';

import { getPosts } from '@/controllers/PostsControllers';

export default {
  components: {
    PostCard,
    FeaturedCardList,
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

