<template>
  <div>

    <!-- 게시물페이지 -->
    <div v-if="step==0">
      <PostVue v-for="(a,i) in data" :key="i" :a="a"/>
    </div>

    <!-- 필터선택페이지 -->
    <div v-if="step==1">
      <div class="upload-image" :class="myfilter" :style="{'backgroundImage': `url( ${urllink} )`}"></div>
      <div class="filters">
        <FilterBoxVue :urllink="urllink" v-for="(filter,i) in filtername" :key="i" :filter="filter">
          {{filter}}
        </FilterBoxVue>
      </div>
    </div>

    <!-- 글작성페이지 -->
    <div v-if="step==2">
      <div class="upload-image" :class="myfilter" :style="{'backgroundImage': `url( ${urllink} )`}"></div>
      <div class="write">
        <textarea class="write-box" @input="$emit('contentEvent',$event.target.value)" placeholder="write here!"></textarea>
      </div>
    </div>
  </div>
    
</template>

<script>
import Post from './Post.vue'
import FilterBox from './FilterBox.vue'
import filtername from '../assets/filtername'


export default {
  name : 'Container',
  components : {
    PostVue : Post,
    FilterBoxVue : FilterBox
  },
  props : {
    data : Array,
    step : Number,
    urllink : String,
    myfilter : String,
  },
  data () {
    return {
      filtername : filtername,
    }
  },
}
</script>

<style>
.upload-image{
width: 100%;
height: 450px;
background: cornflowerblue;
background-size : cover;
}
.filters{
overflow-x:scroll;
white-space: nowrap;
}
.filter-1 {
width: 100px;
height: 100px;
background-color: cornflowerblue;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : white;
background-size: cover;
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
background: #888; 
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.write-box {
border: none;
width: 90%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
}
</style>