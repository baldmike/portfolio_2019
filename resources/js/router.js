import VueRouter from 'vue-router'

import MainApp from './MainApp'
import Portfolio from './views/Portfolio.vue'
import CrapsComponent from './views/CrapsComponent'

export const router = new VueRouter({ 
    mode: 'history',
    
    routes: [ 
        {
            path: '/', 
            component: MainApp,
            children: [
                {
                    path: '',
                    component: Portfolio,

                },

                {
                    path: '/craps',
                    component: CrapsComponent,

                },
               
            ]
        },
    ],
})
