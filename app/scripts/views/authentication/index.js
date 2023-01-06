import { isEmail } from "./../../util/tools";
import * as authentServer from "./authentication.server";
export default {
    data() {
        return {
            userInfo: JSON.parse(sessionStorage.getItem("userInfo")) || { meta: { name: "" } },
            isEmail: false,
            email: "",
            errorText: "",
            isVident: false,
        };
    },
    mounted() {
        if (this.userInfo.meta.name) {
            this.getUser();
        }
    },
    methods: {
        /**  */
        async getUser() {
            let res = await authentServer.getUser({ token: this.userInfo.address });
            if (res.code) {
                this.userInfo.email = res.data.email;
                this.email = res.data.email;
                sessionStorage.setItem("userInfo", JSON.stringify(res.data));
                if (this.email) {
                    this.isEmail = false;
                } else {
                    this.isEmail = true;
                }
            }
        },
        //选择修改邮箱
        selectEmail() {
            this.email = "";
            this.errorText = "";
            this.isEmail = !this.isEmail;
        },
        //修改邮箱
        async editEmail() {
            if (this.email === "") {
                this.errorText = "邮箱不能为空";
                return false;
            } else if (!isEmail(this.email)) {
                this.errorText = "邮箱格式不正确";
                return false;
            }
            this.errorText = "";
            let params = {
                token: this.userInfo.address,
                email: this.email,
            };
            let res = await authentServer.getemilBand(params);
            if (res.code == 200) {
                this.isEmail = false;
            }
        },
        //关闭
        close() {
            this.isVident = false;
        },
    },
};
