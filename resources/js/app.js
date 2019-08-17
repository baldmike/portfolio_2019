import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import { router } from './router'
import store from './store'


require('./bootstrap');

window.Vue = require('vue');

Vue.use(BootstrapVue)
Vue.use(VueRouter)

Vue.component('Portfolio', require('./views/Portfolio.vue').default);
Vue.component('CrapsView', require('./views/CrapsView.vue'));

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    template: '<router-view></router-view>',
    router,
    store,
});
