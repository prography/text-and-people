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
        <PostCard
          class="post-card"
          :key="item._id"
          :title="item[titleKey]"
          :description="item[descriptionKey]"
          :image="item[imageKey]"
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
import PostCard from '@/containers/posts/PostCard';
import Card from '@/components/card/Card';

export default {
  components: {
    Card,
    PostCard,
  },
  data: () => {
    return {
      currentPage: 0,
    };
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    titleKey: {
      type: String,
      default: 'title',
    },
    descriptionKey: {
      type: String,
      default: 'description',
    },
    imageKey: {
      type: String,
      default: 'image',
    },
    autoPagination: {
      type: Boolean,
      default: false,
    },
    autoPaginationTime: {
      type: Number,
      default: 5000,
    },
  },
  created() {
    this.autoPaginationItem();
  },
  methods: {
    autoPaginationItem() {
      if (this.autoPagination) {
        setInterval(() => {
          this.goToPage(this.currentPage + 1);
        }, this.autoPaginationTime);
      }
    },
    goToPage(nextPage) {
      if (this.items.length <= nextPage) {
        this.currentPage = 0;
      } else if (nextPage < 0) {
        this.currentPage = this.items.length - 1;
      } else {
        this.currentPage = nextPage;
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

