import * as certificationServer from "./certification.server.js";
export default {
    data() {
        return {
            type: 2,
            formData: {},
            dateTime: [],
        };
    },
    methods: {
        //上传身份证正面
        async uploadCardFrontRequest(param) {
            let formData = new FormData();
            formData.append("file", param.file);
            let res = await certificationServer.uploadFile(formData);
            if (res.code == 200) {
                this.$message.success("上传成功");
            }
        },
        //上传身份证反面
        async uploadCardBackRequest(param) {
            let formData = new FormData();
            formData.append("file", param.file);
            let res = await certificationServer.uploadFile(formData);
            if (res.code == 200) {
                this.$message.success("上传成功");
            }
        },
        //确认提交认证
        async confrimAuthentication() {
            if (this.dataTime && this.dataTime.length > 0) {
                this.formData.startTime = this.dataTime[0];
                this.formData.endTime = this.dataTime[1];
            }
            let res = await certificationServer.getAuthentication(this.formData);
            if (res.code == 200) {
                this.$message.success("上传成功");
            }
        },
    },
};
