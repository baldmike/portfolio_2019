import VueRouter from 'vue-router'

import MainApp from './MainApp'
import Portfolio from './views/Portfolio.vue'

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
               
            ]
        },
    ],
})
