import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            likes: 0,
            likeCheck: false,
        }
    }, // state 데이터 저장공간
    mutations: {
        likebtn(state) {
            if (state.likeCheck) {
                state.likes--
                state.likeCheck = false
                return
            }
            state.likes++
            state.likeCheck = true
        },

    } // state 변경하는곳
})

export default store