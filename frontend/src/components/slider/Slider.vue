<template>
  <div class="slider">
    <i
      class="medium material-icons slider-indicators indicator-left white-text grey darken-4"
      @click="goToPage(currentPage - 1)"
    >
      navigate_before
    </i>
    <template
      fragment
      v-for="(item, i) in items"
      v-if="i === currentPage"
    >
      <a
        class="banner"
        :key="`slider-${i}`"
        :href="item[hrefKey]"
        target="_blank"
      >
        <img
          class="responsive-img"
          :src="item[imageKey]"
          :alt="item[descriptionKey]"
          :style="style"
        />
        <h4
          v-if="!!item[titleKey]"
          class="banner-title black-text"
        >
          {{ item[titleKey] }}
        </h4>
        <div
          v-if="item[descriptionKey]"
          class="banner-description black-text"
        >
          {{ item[descriptionKey] }}
        </div>
      </a>
    </template>
    <i
      class="medium material-icons slider-indicators indicator-right white-text grey darken-4"
      @click="goToPage(currentPage + 1)"
    >
      navigate_next
    </i>
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
  props: {
    items: {
      type: Array,
      required: true,
    },
    imageKey: {
      type: String,
      default: 'image',
    },

    titleKey: {
      type: String,
      default: 'title',
    },
    descriptionKey: {
      type: String,
      default: 'description',
    },
    hrefKey: {
      type: String,
      default: 'link',
    },
    isAuto: {
      type: Boolean,
      default: false,
    },
    autoPaginationTime: {
      type: Number,
      default: 7000,
    },
    height: {
      type: Number,
      default: 600,
    },
  },
  data: () => {
    return {
      currentPage: 0,
    };
  },
  computed: {
    style() {
      return `height: ${this.height}px`;
    },
  },
  created() {
    this.autoPaginationItem();
  },
  methods: {
    autoPaginationItem() {
      if (this.isAuto) {
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
.slider {
  background-color: #f3f3f3;
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;

  .slider-indicators {
    position: absolute;
    z-index: 10;
    cursor: pointer;
    &.indicator-left {
      left: 0;
      margin-right: auto;
      border-radius: 0 10px 10px 0;
    }
    &.indicator-right {
      right: 0;
      margin-left: auto;
      border-radius: 10px 0 0 10px;
    }
  }
  .banner {
    display: flex;
    flex-direction: column;
    width: 100%;
    text-decoration: none;
    .banner-title {
      padding: 10px;
    }
    .banner-description {
      font-size: 16px;
      padding: 10px;
    }
  }
}
</style>

