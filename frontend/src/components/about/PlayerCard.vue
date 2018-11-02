<template>
  <div>
    <div class="player-card card">
      <h4>{{ name }}</h4>
      <h6 class="description">{{ description }} </h6>
      <img :src="profile" alt="Profile" class="circle responsive-img">
      <button class="btn purple">
        <a :href="github" target="_blank" class="github">
          Go To Github
        </a>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    profile: {
      type: String,
    },
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    github: {
      type: String,
    },
  },
  created() {},
};
</script>

<style lang="scss" scoped>
.player-card {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 10px 20px;
  .description {
    word-break: break-all;
    padding: 5px;
  }
  .github {
    margin: 10px 5px 0px;
    color: #fff;
  }
  img {
    width: 200px;
    height: 200px;
    margin: 5px 5px 15px;
  }
}
</style>

