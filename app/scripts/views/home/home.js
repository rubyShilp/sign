import Clipboard from "clipboard";
import * as homeServer from "./home.server.js";
import { token } from "./../../util/core.js";
export default {
    data() {
        return {
            isVident: false,
            isCopy: false,
            copyRemark: "",
            userInfo: JSON.parse(sessionStorage.getItem("userInfo")) || { meta: { name: "" } },
            curIndex: 1,
        };
    },
    watch: {
        $route(to, from) {
            this.userInfo = JSON.parse(sessionStorage.getItem("userInfo")) || { meta: { name: "" } };
        },
    },
    methods: {
        //跳转页面
        getPath(url, type) {
            this.curIndex = type;
            if (type == 1) {
                if (this.userInfo.meta.name) {
                    this.$router.push("/home/authent");
                } else {
                    this.$router.push("/home/wallet");
                }
            } else {
                this.$router.push(url);
            }
        },
        //退出
        close() {
            this.isVident = false;
        },
        //解绑
        async login() {
            this.close();
            sessionStorage.setItem("TOKEN", null);
            sessionStorage.setItem("userInfo", null);
            this.$router.push("/home/wallet");
            // let users = JSON.parse(sessionStorage.getItem("users"));
            // if (users.id) {
            //     let params = {
            //         token: token(),
            //         email: "",
            //         id: users.id,
            //     };
            //     let res = await homeServer.getUnbinding(params);
            //     if (res.code == 200) {
            //         this.close();
            //         sessionStorage.setItem("userInfo", null);
            //         this.$router.push("/home/wallet");
            //     }
            // }
        },
        //复制链接
        initClipboardData() {
            const clipboard = new Clipboard("#eqbtn");
            clipboard.on("success", (e) => {
                this.isCopy = true;
                this.copyRemark = "Copied";
                clipboard.destroy();
            });
            clipboard.on("error", (e) => {
                clipboard.destroy();
                this.copyRemark = "Failure";
                this.isCopy = false;
            });
            setTimeout(() => {
                this.copyRemark = "";
            }, 2000);
        },
    },
};
