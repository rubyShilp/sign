export default {
    data() {
        return {
            userInfo: JSON.parse(sessionStorage.getItem("userInfo")) || { meta: { name: "" } },
        };
    },
    methods: {
        //跳转页面
        getPath(url, type) {
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
    },
};
