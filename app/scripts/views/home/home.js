export default {
    data() {
        return {
            userInfo: JSON.parse(sessionStorage.getItem("userInfo")) || { meta: { name: "" } },
        };
    },
    methods: {
        //跳转页面
        getPath(url) {
            this.$router.push(url);
        },
    },
};
