<template>
    <div class="wallet-main">
        <div class="wallet-content">
            <div class="wallet-flex">
                <div class="flex-left">
                    <div class="wallet-title">Please select your wallet to connect</div>
                    <div class="wallet-remark">Your e-Signature account generation will depend on your wallet connection.</div>
                    <div class="btn wallet-btn" @click="connectWallet()">polkadot(.js)</div>
                    <div class="btn wallet-play">polkadot(.js)</div>
                </div>
                <div class="flex-right">
                    <img src="./../../../images/Online-bro.svg" />
                </div>
            </div>
        </div>
        <div class="authent-dilog" v-if="isVident">
            <div class="authent-box">
                <div class="authent-con">
                    <div class="box-flex">
                        <img src="./image/icon1.svg" />
                        <img src="./image/colse.svg" class="close" @click="close()" />
                    </div>
                    <!-- <div class="box-title">Wallet Disconnection</div>
                    <div class="box-remark">You will not be able to see your e-Signature infos if you choose to disconnect.</div>
                    <div class="box-remark">Are you Confirm to disconnect from this wallet?</div> -->
                    <ul>
                        <li :class="{ cur: index === index }" v-for="(item, index) of allAccounts" :key="index" @click="selectAccount(item, index)">{{ item.meta.name }}</li>
                    </ul>
                    <div class="btn close-btn" @click="close()">Cancel</div>
                    <div class="btn submit-btn" @click="login()">confirm Logging</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./index.js"></script>
<style lang="less" scoped>
@import url("./index.less");
</style>
