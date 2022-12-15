<template>
    <div class="home-main">
        <div class="home-left">
            <div class="left-content">
                <template>
                    <div class="contnt-img">
                        <img src="./../../../images/logo.png" />
                    </div>
                    <div class="contnt-ul">
                        <div class="menu-li cur">Home</div>
                        <div class="menu-li">Certification</div>
                    </div>
                </template>
                <div class="left-bottom">
                    <div class="bottom">
                        <img src="./image/icon.png" />
                        <span class="bottom-text">{{ userInfo.meta.name }}</span>
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
