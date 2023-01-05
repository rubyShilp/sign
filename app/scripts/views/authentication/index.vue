<template>
    <div class="authent-main">
        <div class="authent-home">
            <div class="authent-title">Home</div>
            <div class="authent-menu">
                <div class="authent-ul ac-cur">
                    <div class="authent-top">
                        <img src="./../../../images/email.svg" />
                        <span class="top-title">My email</span>
                        <div class="top-right" v-if="isEmail">
                            <span class="bottom-icon">!</span>
                            <span @click="selectEmail"> Not set</span>
                        </div>
                    </div>
                    <div class="authent-content">The email address is to receive notices when other Sign tasks invites you.</div>
                    <div class="authent-bottom" :class="{ 'authent-flex': isEmail }">
                        <template v-if="!isEmail" @click="selectEmail">
                            <div class="bottom-icon" v-if="!email">!</div>
                            <div class="success" v-if="email">√</div>
                            <div class="bottom-text" v-if="email">{{ email }}</div>
                            <div class="bottom-text" v-if="!email">
                                Not set,
                                <a href="javascript:;" @click="selectEmail"> Click here to set </a>
                            </div>
                        </template>
                        <template v-else>
                            <input type="text" class="input" :class="{ red_cur: errorText }" placeholder="Please enter the email address" v-model="email" @blur="editEmail" />
                            <!-- <div class="red">{{ errorText }}</div> -->
                        </template>
                    </div>
                </div>
            </div>
            <div class="authent-menu">
                <div class="authent-ul">
                    <div class="authent-top">
                        <img src="./../../../images/ceart.svg" />
                        <span class="top-title">My Certificate</span>
                        <!-- <div class="top-right">
              <span class="bottom-icon">!</span>
              <span> Not set</span>
            </div> -->
                    </div>
                    <div class="authent-content">Before you initiate a sign task, You need a legal Certificate to justify who are you. Applying for your certificate right now!</div>
                    <div class="authent-bottom">
                        <div class="authent-ream">look forward…</div>
                    </div>
                </div>
            </div>
            <div class="authent-menu">
                <div class="authent-ul">
                    <div class="authent-top">
                        <img src="./../../../images/ceart.svg" />
                        <span class="top-title">My Seals</span>
                        <!-- <div class="top-right">
              <span class="bottom-icon">!</span>
              <span> Not set</span>
            </div> -->
                    </div>
                    <div class="authent-content">Before you initiate a sign task, You need a legal Certificate to justify who are you. Applying for your certificate right now!</div>
                    <div class="authent-bottom">
                        <div class="authent-ream">look forward…</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./index.js"></script>
<style lang="less" scoped>
@import url("./index.less");
</style>
