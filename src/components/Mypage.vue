<template>

<div style="padding : 10px">
    <h4>팔로워</h4>
    <input placeholder="?" @input="searchingMessege($event.target.value)"/>
    <div class="post-header" v-for="(follower,index) in followers" :key="index">
        <div class="profile" :style="{'backgroundImage' : `url(${follower.image})`}"></div>
        <span class="profile-name">{{follower.name}}</span>
    </div>
</div>

</template>

<script>
import {onMounted, ref, watch} from 'vue';
import axios from 'axios';
import {useStore} from 'vuex'; // Composition API에서  vuex 사용

export default {
    name : 'Mypage',
    setup(){
        let followers = ref([])
        let originFollowers = ref([])
        let newFollowers = new Array()

        onMounted(()=>{
            axios.get('/follower.json').then((a)=>{
                followers.value = a.data
                originFollowers.value = a.data
            })
        })

        

        function searchingMessege(e) {
            newFollowers = []
            
            for(let follower of originFollowers.value) {
                if(follower.name.toLowerCase().includes(e)===true) {
                    newFollowers.push(follower)
                } 
            }

            followers.value = [...newFollowers]
        }


        // let store = useStore(); // store.js 에서 가져옴 mapState 사용 x
        // console.log(store.state.name)
        

        return {followers, searchingMessege, newFollowers}
    },
}
</script>

<style>

</style>