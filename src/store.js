import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
    state() {
        return {
            likes: 0,
            likeCheck: false,
            more: {},
        }
    }, // state 데이터 저장공간
    mutations: {
        setMore(state, data) {
            state.more = data
        },
        likebtn(state) {
            if (state.likeCheck) {
                state.likes--
                state.likeCheck = false
                return
            }
            state.likes++
            state.likeCheck = true
        },

    }, // state 변경하는곳
    actions: {
        getData(context) {
            axios.get(`https://codingapple1.github.io/vue/more0.json`)
                .then((a) => {
                    console.log(a.data)
                    context.commit('setMore', a.data)
                })
        }
    } // ajax 요청하는곳
})

export default store