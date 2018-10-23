<template>
  <div class="card">
    <div class="card-image">
      <img :src="profile">
      <span class="card-title">{{ name }}</span>
    </div>
    <div class="card-content">
      <p>
        {{ description }}
      </p>
    </div>
    <div
      class="cards-action"
      v-if="github"
    >
      <a :href="github">Go to GitHub</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    profile: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    github: {
      type: String,
    },
  },
  mounted() {},
};
</script>
