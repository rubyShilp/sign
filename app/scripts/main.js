import Vue from "vue";
import App from "./views/app.vue";
import router from "./routers/router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./filter/filter";
Vue.use(ElementUI);
new Vue({
    router: router,
    render: (h) => h(App),
}).$mount("#app");
