<template>
  <div class="row item-card card">
    <div class="col s10 item-detail">
      <h5 v-if='!!title'>
        {{ title }}
      </h5>
      <h6 v-if='!!description'>
        {{ description }}
      </h6>
    </div>
    <div v-if='!!image' class="col s2 item-image-box">
      <img :src='image' class="item-image responsive-img">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang='scss' scoped>
.item-card {
  display: flex;
  align-items: center;
  padding: 10px;
  .item-detail {
    h5 {
      font-weight: 600;
    }
    flex-direction: column;
  }
  .item-image-box {
    margin: auto;
    .item-image {
      width: 150px;
      height: 150px;
    }
  }
}
</style>

