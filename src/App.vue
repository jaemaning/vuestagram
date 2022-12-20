<template>
  <div class="header">
    <ul class="header-button-left" v-if="step==1 | step==2">
      <li @click="step=0">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step==1" @click="step++">Next</li>
      <li v-if="step==2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" @click="step=0"/>
  </div>
  
  <ContainerVue :data="data" :step="step" :urllink="urllink" :myfilter="myfilter" @contentEvent="mycontent=$event"/>

  <div class="align-center" v-if="step==0">
    <div v-if="Lastdata">마지막 데이터 입니다.</div>
    <br/>
    <button @click="more" class="blue-btn">더보기</button>
  </div>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" accept="image/*" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
 </div>

  
</template>

<script>
import Container from './components/Container.vue';
import data from './assets/vuestargramdata';
import axios from 'axios' ;
import {mapMutations, mapState} from 'vuex' ;


export default {
  name: 'App',
  data () {
    return {
      step : 3,
      data : data,
      count : 0,
      urllink : "",
      mycontent : "",
      myfilter : "",
      Lastdata : false,
    }
  },

  components: {
    ContainerVue : Container,
  },

  methods : {
    ...mapMutations([]), // vuex mutations 를 쉽게 가져다 쓸 수 있음.

    more() {
      axios.get(`https://codingapple1.github.io/vue/more${this.count}.json`)
      .then((결과)=>{
        console.log(결과.data)
        this.data.push(결과.data)
        this.count++
        console.log(this.count)
      })
      .catch((err)=>{
        console.log(err)
        this.Lastdata = true
      })
    },
    upload(e) {
      let file = e.target.files;
      this.step++
      this.urllink = URL.createObjectURL(file[0])
    },
    publish() {
      let 내게시물 = {
        name: "Kim Jaeman",
        userImage: "https://placeimg.com/100/100/animals",
        postImage: this.urllink,
        likes: 36,
        date: "Dec 14",
        liked: false,
        content: this.mycontent,
        filter: this.myfilter
      };
      this.data.unshift(내게시물);
      this.step = 0;
    }
  },

  computed : {
    ...mapState([]), // state 를 가져와서 간단하게 쓸수있음
  }, // 웹페이지 처음 로드 될때 한번만 함수 실행 후 값을 기억 (재렌더링 되어도 실행 안함.) 계산결과저장용 함수들

  mounted(){
    this.emitter.on('filterOn', (e)=>{
      this.myfilter = e
    })
  }
}
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
  text-align: center;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}

.align-center{
  text-align: center;
  margin: auto;
}

.blue-btn{
  background-color: rgba(56, 96, 215, 0.65);
  color:#eee;
  padding : 3px;
  border: solid 1px blue ;
  border-radius: 7%;
  cursor: pointer;
}

</style>
