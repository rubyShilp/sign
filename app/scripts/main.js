import Vue from "vue";
import App from "./views/app.vue";
import router from "./routers/router";
import fddUI from "./components/index.js";
import "./filter/filter";
import { WsProvider } from "@polkadot/api";
Vue.prototype.wsProvider = new WsProvider("wss://rpc.polkadot.io");
Vue.use(fddUI);
new Vue({
    router: router,
    render: (h) => h(App),
}).$mount("#app");
