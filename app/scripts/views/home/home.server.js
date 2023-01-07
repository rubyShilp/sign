import { get, put, post } from "@/servers/httpServer.js";
//解绑传邮箱为空
export const getUnbinding = async (params) => {
    let result = await post("/v1/member/setemail", params);
    return result.data;
};
