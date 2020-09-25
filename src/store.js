import { createStore } from 'vuex'

const store = createStore({
    state () {
        return {
            items: [
                { title: 'Potteplante'},
                { title: 'Rensemiddel til kaffemaskinen'},
                { title: 'Bakepapir'},
            ]    
        }
    }
})

export default store;