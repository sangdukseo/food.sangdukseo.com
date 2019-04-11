<template>
  <transition name="post">
    <article v-if="post" class="post">
      <header class="post__header">
        <h2 class="post__title">{{ title }}</h2>

        <h3 class="post__meta">by <router-link class="post__author"
          :to="`/by/${kebabify(author)}`">{{ author }}</router-link>
          <span class="post__sep"></span>
          <time>{{ prettyDate(published) }}</time>
        </h3>

        <blockquote class="post__subtitle">{{ description }}</blockquote>
      </header>

      <section class="post__body rte">
        <div v-html="content">
        </div>
        <div v-for="image in images">
          <img v-bind:src="`${image}`">
        </div>
      </section>
      
      <footer class="post__footer">
        <vue-disqus v-if="commentsReady" shortname="food-11"
          :key="post" :identifier="post" :url="`https://food.sangdukseo.com/read/${post}`"/>
      </footer>
    </article>
  </transition>
</template>

<script>
import VueDisqus from 'vue-disqus/VueDisqus'
import { kebabify, prettyDate } from '../helpers'

export default {
  name: 'blog-post',
  resource: 'BlogPost',
  components: { VueDisqus },
  props: { post: String },

  data() {
    return {
      title: '',
      author: '',
      content: '',
      published: '',
      description: '',
      commentsReady: false,
      drivekey: ''
    }
  },

  watch: {
    post(to, from) {
      if (to === from || !this.post) return;

      this.commentsReady = false
      this.$getResource('post', to)
        .then(this.showComments)
    }
  },

  methods: {
    kebabify,
    prettyDate,
    showComments() {
      setTimeout(() => {
        this.commentsReady = true
      }, 1000)
    }
  },

  beforeMount() {
    if (!this.post) return;
    this.$getResource('post', this.post)
      .then(this.showComments)
  }
}
</script>
