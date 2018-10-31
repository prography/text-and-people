<template>
  <ul class="pagination">
    <li class="disabled">
      <a href="#!"><i class="material-icons">chevron_left</i></a>
    </li>
    <template
      fragment
      v-for="(page, i) in pages"
    >
      <li
        :key='`pagination-${i}`'
        :class="i === currentPage
          ? 'active'
          : 'waves-effect'
        ">
          <a href="#!">1</a>
      </li>
    </template>
    <li class="waves-effect">
      <a href="#!"><i class="material-icons">chevron_right</i></a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      default: 0,
    },
    onChangePage: {
      type: Function,
      default: () => null,
    },
  },
  methods: {
    goToPage(page) {
      if (this.posts.length <= page) {
        this.currentPage = 0;
      } else if (this.currentPage <= 0) {
        this.currentPage = this.posts.length - 1;
      } else {
        this.currentPage = page;
      }
    },
  },
};
</script>
