import Vue from "vue"
import Router from "vue-router"

import MainWork from "../pages/rus/MainWork.vue"
import MainWorkKaz from "@/pages/kaz/MainWorkKaz.vue"
// import AboutWorks from "../pages/AboutWorks"
// import NotPound from "../components/NotPound.vue"
// import ReviewsWork from "../pages/ReviewsWork.vue"
// import DeliverWorks from "../pages/DeliveryWorks.vue"
// import ProductsWorks from "../pages/ProductsWorks.vue"
// import { component } from "vue/types/umd";

Vue.use(Router);

let router = new Router({
    routes:[
        {
            path: '/',
            name: 'catalog',
            component: MainWork
        },
        {
            path: '/kaz',
            name: 'kaz',
            component: MainWorkKaz
        }
        // {
        //     path:'/about',
        //     name: 'about',
        //     component: AboutWorks
        // },
        // {
        //     path: '*',
        //     name: "NotFound",
        //     component: NotPound,
        // },
        // {
        //     path: '/reviews',
        //     name: "reviews",
        //     component: ReviewsWork,
        // },
        // {
        //     path: '/delivery',
        //     name: 'delivery',
        //     component: DeliverWorks,
        // },
        // {
        //     path: '/products',
        //     name: 'products',
        //     component: ProductsWorks,
        // }
    ]
})

export default router;