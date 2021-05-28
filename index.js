import Vue from 'vue';
import App from './components/subdir/App.vue';


const app = new Vue({
    render(h) {
        return h(App)
    }
});

app.$mount();
