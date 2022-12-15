import { get, put, post } from "@/servers/httpServer.js";
//查询数据列表
export const getUser = async (params) => {
    let result = await get("/v1/member/list", params);
    return result.data;
};
//更改邮箱
export const getemilBand = async (params) => {
    let result = await post("/v1/member/setemail", params);
    return result.data;
};
