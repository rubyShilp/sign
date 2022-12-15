export default {
    data() {
        return {
            userInfo: JSON.parse(sessionStorage.getItem("userInfo")),
        };
    },
};
