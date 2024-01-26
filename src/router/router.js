import { createWebHistory, createRouter } from 'vue-router'
import { isAuthorized } from '@/services/auth.ts'
import Home from '@/components/Home.vue'
import Login from '@/components/Login.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeResolve(async (to, from, next) => {
    if (!isAuthorized() && to.name !== "Login") {
        next({
            path: "login",
            replace: true
        })
    } else {
       next();
    }
})

export default router;