<template>
  <div>
    <div class="post-detail">
      <h3>
        {{ post.title }}
      </h3>
      <h6>
        {{ post.author }}
      </h6>
    </div>
    <div class="post-image">
      <img :src='post.mainImage'>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  mounted() {},
};
</script>

<style scoped>
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

