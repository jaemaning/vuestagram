<template>
  <div>
    <PostVue v-for="(a,i) in data" :key="i" :a="a"/>
  </div>
</template>

<script>
import Post from './Post.vue'


export default {
  name : 'Container',
  components : {
    PostVue : Post
  },
  props : {
    data : Array,
  }
}
</script>

<style>

</style>