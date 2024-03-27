import { createApp } from 'vue'
import App from './App.vue'
import {createRouter,createWebHistory} from 'vue-router'

const routes = [
    {
        path:'/',
        component:()=>import('@/components/accueil.vue')
    },
    {
        path:'/produits',
        component: ()=>import('@/components/produit.vue')
    },
    {
        path:'/stock',
        component:()=>import('@/components/stock.vue')
    },
    {
        path:'/vente',
        component:()=>import('@/components/Vente.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})


createApp(App).use(router).mount('#app')
