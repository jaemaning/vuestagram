<template>
  <div class="filter-item" :class="filter" @click="filterOn" :style="{'backgroundImage' : `url(${urllink})` }">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name : 'FilterBox',
    props : {
        urllink : String,
        filter : String
    },
    methods : {
      filterOn () {
        this.emitter.emit('filterOn' , this.filter)
      }
    }
}
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
  cursor : pointer;
}
</style>