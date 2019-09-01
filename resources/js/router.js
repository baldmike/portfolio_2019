import VueRouter from 'vue-router'

import MainApp from './MainApp'
import Portfolio from './views/Portfolio.vue'
import CrapsView from './views/CrapsView'
import Resqmia from './views/Resqmia'


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
                    component: CrapsView,

                },

                {
                    path: '/resqmia',
                    component: Resqmia,

                },
               
            ]
        },
    ],
})
