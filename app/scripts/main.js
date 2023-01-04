import Vue from "vue";
import App from "./views/app.vue";
import router from "./routers/router";
import fddUI from "./components/index.js";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./filter/filter";
Vue.use(fddUI);
Vue.use(ElementUI);
new Vue({
    router: router,
    render: (h) => h(App),
}).$mount("#app");
