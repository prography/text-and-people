<template>
  <section id="editor">
    <div class="container">
      <div class="markdownWrapper">
        <textarea
          @blur="focus = false"
          @change="update"
          class="rawMarkdown"
          id="markdown-editor"
          v-model="input"
          rows="40"
        >
        </textarea>
        <div
          @click="setFocus()"
          class="compiledMarkdown"
          v-html="compiledMarkdown"
          v-show="!focus"
        >
        </div>
      </div>
      <div class="action-buttons right-align">
        <button
          type="button"
          class="btn purple"
          @click="postContent"
        >
          Reginster
        </button>
      </div>
      <div class="center">
        <PreLoader :isShow="isLoading" />
      </div>
    </div>
  </section>
</template>

<script>
import marked from 'marked';
import _ from 'lodash';

import PreLoader from '@/components/preloader/PreLoader';

import { createPost } from '@/controllers/PostsControllers';

export default {
  components: {
    PreLoader,
  },
  data: () => {
    return {
      focus: false,
      input: '',
      isLoading: false,
    };
  },
  computed: {
    compiledMarkdown() {
      return marked(this.input, { sanitize: true });
    },
  },
  methods: {
    update: _.debounce(function(event) {
      this.input = event.target.value;
    }, 300),

    setFocus() {
      this.focus = true;
      document.getElementById('markdown-editor').focus();
    },

    postContent() {
      createPost({
        title,
        content,
      })
        .then(({ data, message }) => {
          this.isLoading = true;
          setTimeout(() => {
            if (data) {
              this.isLoading = false;
              this.$router.push(`/posts`);
            } else {
              this.message = message;
            }
          }, 1000);
        })
        .catch(({ message }) => {
          this.message = message;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.markdownWrapper {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 20px 0;

  .rawMarkdown,
  .compiledMarkdown {
    background-color: #fff;
    font-family: 'Roboto', arial, sans-serif;
    border: 2px solid #b6cdd8;
    resize: none;
    border-radius: 5px;
    overflow-y: scroll;
    display: block;
    padding: 15px;
    font-size: 0.85em;
    line-height: 1.5em;
    outline: none;
    width: 100%;
    height: 100% !important;
  }
  .compiledMarkdown {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
.action-buttons {
  margin: 5px 0;
  button {
    margin: 5px;
  }
}
</style>

