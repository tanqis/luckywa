import Vue from "vue"
import VueX from "vuex"
Vue.use(VueX)
const store = new VueX.Store({
    state: {
        Authorization: localStorage.getItem("Authorization")
    },
    getters: {},
    mutations: {
        logIn(state, data) {
            const token = data.Authorization
            state.Authorization = token
            localStorage.setItem("Authorization", token)
        },
        logOut(state) {
            state.Authorization = ""
            localStorage.setItem("Authorization", "")
        },
    },
    actions: {
        logInAsync(context, user) {
            setTimeout(() => {
                context.commit('logIn', user); //context提交
            }, 2000)
        }
    }
})
export default store