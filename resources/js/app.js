import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

require('./bootstrap');

window.Vue = require('vue');

Vue.use(BootstrapVue)

Vue.component('portfolio', require('./components/portfolio.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
