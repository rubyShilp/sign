import { get, put, post } from "@/servers/httpServer.js";
//注册登录
export const getRegister = async (params) => {
    let result = await post("/v1/member/register", params);
    return result.data;
};
