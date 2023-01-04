<template>
    <div class="home-main">
        <div class="home-left">
            <div class="left-content">
                <template>
                    <div class="contnt-img">
                        <img src="./../../../images/logo.png" />
                    </div>
                    <div class="contnt-ul">
                        <div class="menu-li cur" @click="getPath('/home/wallet')">Home</div>
                        <div class="menu-li" @click="getPath('/home/certification')">Certification</div>
                    </div>
                </template>
                <div class="left-bottom">
                    <div class="bottom">
                        <img src="./image/icon.png" />
                        <span class="bottom-text" v-if="userInfo.meta.name">{{ userInfo.meta.name }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="home-right">
            <router-view></router-view>
        </div>
    </div>
</template>
<script src="./home.js"></script>
<style lang="less" scoped>
@import url("./home.less");
</style>
