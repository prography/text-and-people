<template>
  <div class="row item-card card">
    <div :class="`col ${!!image ? 's10' : 's12 item-detail'}`">
      <h5 v-if='!!title'>
        {{ title }}
      </h5>
      <p
        v-if='!!description'
        class="truncate"
      >
        {{ description }}
      </p>
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
      default: '',
    },
    image: {
      type: String,
      default: '',
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
      font-weight: 700;
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

