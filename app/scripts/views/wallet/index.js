import { ApiPromise } from "@polkadot/api";
import { stringToHex } from "@polkadot/util";
import { web3Accounts, web3Enable, web3FromSource } from "@polkadot/extension-dapp";
import * as walletServer from "./wallet.server";
export default {
    data() {
        return {
            isVident: false,
            index: "",
            info: {},
            allAccounts: [], //钱包列表
        };
    },
    methods: {
        //获取钱包
        async connectWallet() {
            const extensions = await web3Enable("Data tranding market");
            if (extensions.length === 0) {
                // 未安装波卡钱包插件
                console.log("Please create cess-hacknet chain account.");
                return;
            }
            this.allAccounts = await web3Accounts(); // 获取所有波卡钱包账户
            if (this.allAccounts.length == 0) {
                //未创建钱包账户
                console.log("Please create account fisrt.");
                return;
            } else {
                this.isVident = true;
            }
        },
        //选择账户
        selectAccount(item, index) {
            this.info = item;
            this.index = index;
            sessionStorage.setItem("userInfo", JSON.stringify(this.info));
        },
        //登录注册
        async login() {
            //web3FromSource方法将返回一个 InjectedExtension 类型
            const injector = await web3FromSource(this.info.meta.source);
            const signRaw = injector?.signer?.signRaw;
            if (signRaw) {
                let res = await signRaw({
                    address: this.info.address,
                    data: stringToHex(this.info.address),
                    type: "bytes",
                });
                if (res) {
                    console.log("获取签名", res, res.signature.slice(2));
                }
            }
            let params = {
                token: this.info.address,
            };
            let res = await walletServer.getRegister(params);
            if (res.code == 200) {
                this.$router.push("/home/authent");
            }
        },
        //关闭弹窗
        close() {
            this.isVident = false;
        },
    },
};
