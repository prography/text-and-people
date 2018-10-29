<template>
  <div class="feature-card">
    <div class="feature-card-indicator">
      <i
        class="medium material-icons left"
        @click="goToPage(currentPage - 1)"

      >
        navigate_before
      </i>
      <template
        fragment
        v-for="(item, i) in items"
        v-if="i === currentPage"
      >
        <Card
          class="item-card"
          :key="item._id"
          :title="item.title"
          :description="item.author"
          :image="item.mainImage"
        />
      </template>
      <i
        class="medium material-icons right"
        @click="goToPage(currentPage + 1)"
      >
        navigate_next
      </i>
    </div>
  </div>
</template>


<script>
import Card from '@/components/card/Card';

export default {
  components: {
    Card,
  },
  data: () => {
    return {
      currentPage: 0,
    };
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    goToPage(page) {
      if (this.items.length <= page) {
        this.currentPage = 0;
      } else if (this.currentPage < 0) {
        this.currentPage = this.items.length - 1;
      } else {
        this.currentPage = page;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.feature-card {
  padding: 0px 10px;
  background-color: #f3f3f3;
  position: relative;
  .feature-card-indicator {
    display: flex;
    align-items: center;
    .material-icons {
      position: absolute;
      z-index: 10;
      cursor: pointer;
      &.left {
        left: -5%;
        margin-right: auto;
      }
      &.right {
        right: -5%;
        margin-left: auto;
      }
    }
    .item-card {
      width: 100%;
    }
  }
}
</style>

