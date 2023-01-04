import Vue from "vue";
import VueRouter from "vue-router";
import { token, sessionOut } from "./../util/core";
Vue.use(VueRouter);
Vue.config.productionTip = false;
//路由页面切换的时候，保持页面在滚动顶部显示
const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
        return savedPosition;
    } else {
        const position = {};
        if (to.hash) {
            position.selector = to.hash;
        }
        if (to.matched.some((m) => m.meta.scrollToTop)) {
            position.x = 0;
            position.y = 0;
        }
        return position;
    }
};
// 定义路由
const loginRouter = [
    { path: "/", redirect: "/main" },
    {
        path: "/main",
        component: () => import("./../views/main/index.vue"),
        meta: { scrollToTop: true },
    },
    {
        path: "/home1",
        component: () => import("./../views/home1/home.vue"),
        meta: { scrollToTop: true },
    },
    {
        path: "/home",
        component: () => import("./../views/home/index.vue"),
        meta: { scrollToTop: true },
        children: [
            {
                path: "/home/authent",
                component: () => import("./../views/authentication/index.vue"),
                meta: { scrollToTop: true },
            },
            {
                path: "/home/wallet",
                component: () => import("./../views/wallet/index.vue"),
                meta: { scrollToTop: true },
            },
            {
                path: "/home/certification",
                component: () => import("./../views/certification/index.vue"),
                meta: { scrollToTop: true },
            },
            {
                path: "/home/success",
                component: () => import("./../views/certification/success.vue"),
                meta: { scrollToTop: true },
            },
            {
                path: "/home/audit",
                component: () => import("./../views/certification/audit.vue"),
                meta: { scrollToTop: true },
            },
            {
                path: "/home/apply",
                component: () => import("./../views/certification/apply.vue"),
                meta: { scrollToTop: true },
            },
        ],
    },
    {
        path: "/handWritten",
        component: () => import("./../views/signature/signature.vue"),
        meta: { scrollToTop: true },
    },
    {
        path: "/sign",
        component: () => import("./../views/sign/sign.vue"),
        meta: { scrollToTop: true },
    },
];
const routes = [...loginRouter];
// 创建router实例
const router = new VueRouter({
    mode: "history",
    base: __dirname,
    scrollBehavior,
    routes: routes,
});
//判断当前是否登录，则跳转相应的页面
router.beforeEach((to, form, next) => {
    // 判断是否需要登录权限
    if (to.matched.some((res) => res.meta.requireAuth)) {
        // 判断是否登录
        if (token()) {
            next();
        } else {
            next({
                path: "/login",
            });
        }
    } else {
        next();
    }
});
export default router;
