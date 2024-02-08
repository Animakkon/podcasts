import { createWebHistory, createRouter } from 'vue-router'
import { isAuthorized } from '@/services/auth.ts'
import Login from '@/components/general/Login.vue'
import ShopPage from "@/components/ShopPage.vue";
import CartPage from "@/components/CartPage.vue";
import ProductCreatePage from "@/components/ProductCreatePage.vue";
import CheckoutPage from "@/components/CheckoutPage.vue";

const routes = [
    { path: '/', component: ShopPage },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/shop',
        name: 'Shop',
        component: ShopPage
    },
    {
        path: '/cart',
        name: 'Cart',
        component: CartPage

    },
    {
        path: '/checkout',
        name: 'Checkout',
        component: CheckoutPage

    },
    {
        path: '/product_create',
        name: 'Ceate product',
        component: ProductCreatePage
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach(async (to, from, next) => {
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