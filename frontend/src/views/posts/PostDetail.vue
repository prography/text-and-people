<template>
  <section>
    <h2>PostDetail</h2>
    <router-view></router-view>
  </section>
</template>

<script>
import { getPost } from '@/controllers/PostsControllers';

export default {
  components: {},
  created() {
    this.getPostFromAPI();
  },
  data: () => {
    return {
      post: {},
    };
  },
  methods: {
    getPostFromAPI() {
      getPost().then((data) => {
        this.post = data;
      });
    },
  },
};
</script>
