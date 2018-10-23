<template>
  <div class="feature-card">
    <template
      fragment
      v-for="post in posts"
    >
      <PostCard
        class="post-card"
        :key="post._id"
        :post="post"
      />
    </template>
  </div>
</template>


<script>
import PostCard from '@/components/posts/PostCard';

export default {
  components: {
    PostCard,
  },
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
  },
  created() {},
  mounted() {},
};
</script>

<style scoped>
.feature-card {
  margin: 20px 0 10px;
  padding: 10px;
  background-color: #f3f3f3;
}
.post-detail {
  flex: 1 1 auto;
  flex-direction: column;
}
.post-image {
  flex: 0 0 auto;
  width: 160px;
  height: 104px;
}
</style>

