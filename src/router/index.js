//配置路由信息
import Vue from "vue";
import VueRouter from "vue-router";

//个人介绍
const introForMe = () => import ("../pages/intro/index");

const test = () => import ("../pages/test/test");

Vue.use(VueRouter);

const routes = [
    {
        path: "",
        component: introForMe,
        meta: {
            title: "崇德、尚用、求真、创新"
        }
    },
    {
        path: "/test",
        component: test
    },
    {
        path: "/home",
        redirect: ""
    }
];

const router = new VueRouter({
    routes,
    mode: "history",
    linkActiveClass: "active"
});

/* 路由发生变化修改页面title */
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
})

export default router;