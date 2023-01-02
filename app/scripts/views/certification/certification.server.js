import { get, put, post } from "@/servers/httpServer.js";
//上传图片
export const uploadFile = async (params) => {
    let result = await post("", params);
    return result.data;
};
//确认提交资料
export const getAuthentication = async (params) => {
    let result = await post("", params);
    return result.data;
};
