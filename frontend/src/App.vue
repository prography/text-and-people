<template>
  <div id="app">
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import NavBar from '@/components/nav/NavBar.vue';
import Footer from '@/components/nav/Footer.vue';

export default {
  components: {
    NavBar,
  },
};
</script>
