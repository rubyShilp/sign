<template>
    <div class="home-main">
        <div class="home-left">
            <div class="left-content">
                <template>
                    <div class="contnt-img">
                        <img src="./../../../images/logo.png" />
                    </div>
                    <div class="contnt-ul">
                        <div class="menu-li" :class="{ cur: curIndex == 1 }" @click="getPath('', 1)">
                            <img v-if="curIndex == 1" src="./image/home.svg" />
                            <img v-else src="./image/home-hover.svg" />
                            Home
                        </div>
                        <div class="menu-li" :class="{ cur: curIndex == 2 }" v-if="userInfo && userInfo.address" @click="getPath('/home/certification', 2)">
                            <img v-if="curIndex == 2" src="./image/rezhen.svg" />
                            <img v-else src="./image/rezhen-hove.svg" />
                            Certification
                        </div>
                    </div>
                </template>
                <div class="left-bottom">
                    <div class="bottom" v-if="userInfo.meta.name">
                        <div class="btn-flex marign-btn">
                            <img src="./image/icon.png" />
                            <span class="span-w bottom-text" v-if="userInfo.meta.name">{{ userInfo.meta.name }}</span>
                            <img class="jie-icon showHider" @click="isVident = true" src="./image/jiebang.svg" />
                        </div>
                        <div class="btn-flex">
                            <input v-model="userInfo.address" type="hidden" id="bar" />
                            <span class="span-w bottom-text span_so">{{ userInfo.address }}</span>
                            <!-- <i v-if="isCopy" class="el-icon-copy-document" id="eqbtn" data-clipboard-action="copy" data-clipboard-target="#bar" @click="initClipboardData()"></i> -->
                            <img slot="reference" class="jie-icon" id="eqbtn" data-clipboard-action="copy" data-clipboard-target="#bar" @click="initClipboardData()" src="./image/fuzhi.svg" />
                            <div class="copyRemark-menu" v-if="copyRemark">{{ copyRemark }}</div>
                            <!-- <el-popover placement="top" trigger="click" popper-class="message-popover">
                                <span>{{ copyRemark }}</span>
                               
                            </el-popover> -->
                        </div>
                    </div>
                    <div class="bottom user-no" v-else>
                        <span class="span-login-no">No wallet data</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="home-right">
            <router-view></router-view>
        </div>
        <div class="authent-dilog" v-if="isVident">
            <div class="authent-box">
                <div class="authent-con">
                    <div class="box-flex">
                        <img src="./../wallet/image/icon1.svg" />
                        <img src="./../wallet/image/colse.svg" class="close" @click="close()" />
                    </div>
                    <div class="box-title">Wallet Disconnection</div>
                    <div class="box-remark">You will not be able to see your e-Signature infos if you choose to disconnect.</div>
                    <div class="box-remark">Are you Confirm to disconnect from this wallet?</div>
                    <div class="name-btn">
                        <div class="btn close-btn" @click="close()">Cancel</div>
                        <div class="btn submit-btn" @click="login()">Confirm</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./home.js"></script>
<style lang="less" scoped>
@import url("./home.less");
</style>
