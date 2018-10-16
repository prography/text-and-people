<template>
  <div id="app">
    <NavBar />
    <router-view />
    <FooterBar />
  </div>
</template>

<script>
import NavBar from '@/components/nav/NavBar';
import FooterBar from '@/components/nav/FooterBar';

export default {
  components: {
    NavBar,
    FooterBar,
  },
};
</script>
