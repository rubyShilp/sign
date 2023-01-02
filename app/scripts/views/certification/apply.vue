<template>
    <div class="certification-main">
        <div class="certification-title"><i class="el-icon-back"></i>Individual Certificate Application</div>
        <el-form :label-position="'top'" label-width="80px">
            <el-form-item label="Nationality">
                <el-select placeholder="Please select your nationality">
                    <el-option value="1" label="123"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="Name">
                <el-input></el-input>
            </el-form-item>
            <el-form-item label="Document Type">
                <el-radio-group v-model="type">
                    <el-radio :label="1">Passport</el-radio>
                    <el-radio :label="2">Identity Card</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="Document Photos">
                <div class="photos-one" v-if="type == 1">
                    <el-upload class="avatar-uploader" action="">
                        <div class="avatar-icon"><i class="el-icon-camera-solid"></i>Photograph</div>
                    </el-upload>
                    <div class="photos-remark">
                        <div class="remark-box-flex">
                            <div class="flex-img">
                                <img src="./../../../images/card-one.png" />
                            </div>
                            <div class="flex-ul-li">
                                <div class="remark">1. Document has not expired.</div>
                                <div class="remark">2. Document must be originals, not photocopies or scans, etc.</div>
                                <div class="remark">3. Content in Photo must be clear and complete.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="photos-one" v-if="type == 2">
                    <div>
                        <el-upload class="avatar-uploader" action="" :show-file-list="false" :http-request="uploadCardFrontRequest" :auto-upload="true" :limit="1">
                            <div class="avatar-icon"><i class="el-icon-camera-solid"></i>Photograph</div>
                        </el-upload>
                        <div class="idCard-remark">Front</div>
                    </div>
                    <div>
                        <el-upload class="avatar-uploader uploader-left" action="" :show-file-list="false" :http-request="uploadCardBackRequest" :auto-upload="true" :limit="1">
                            <div class="avatar-icon"><i class="el-icon-camera-solid"></i>Photograph</div>
                        </el-upload>
                        <div class="idCard-remark">Back</div>
                    </div>
                    <div>
                        <div class="photos-remark" :class="{ 'remark-width': type == 2 }">
                            <div class="remark-box-flex">
                                <div class="flex-ul-li">
                                    <div class="remark">1. Document has not expired.</div>
                                    <div class="remark">2. Document must be originals, not photocopies or scans, etc.</div>
                                    <div class="remark">3. Content in Photo must be clear and complete.</div>
                                </div>
                            </div>
                        </div>
                        <div class="idCard-remark">&nbsp;</div>
                    </div>
                </div>
            </el-form-item>
            <el-form-item label="Document No.">
                <el-input></el-input>
            </el-form-item>
            <el-form-item label="Validity Period">
                <el-date-picker type="datetimerange" v-model="dateTime" range-separator="-" start-placeholder="Date of Issue" end-placeholder="Valid Until" value-format="yyyy-MM-dd hh:mm:ss">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="Document Holder Photo">
                <div class="photos-one">
                    <el-upload class="avatar-uploader" action="">
                        <div class="avatar-icon"><i class="el-icon-camera-solid"></i>Photograph</div>
                    </el-upload>
                    <div class="photos-remark">
                        <div class="remark-box-flex">
                            <div class="flex-img">
                                <img src="./../../../images/card-one.png" />
                            </div>
                            <div class="flex-ul-li">
                                <div class="remark">1. The photo must include person's face with his/her own document.</div>
                                <div class="remark">2. The holder must be the same as the person in the document.</div>
                                <div class="remark">3. Content in document must be clear and complete.</div>
                                <div class="remark">4. The document held must be consistent with the document photo uploaded above.</div>
                                <div class="remark">5. The person in the photo must be clearly and complete.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </el-form-item>
            <el-form-item label="Application Fee">
                <span class="fee-paly">0.871404 DOT ≈ $5.00</span>
            </el-form-item>
            <div>
                <a class="btn-apply" href="javascript:;" @click="confrimAuthentication">Apply</a>
            </div>
        </el-form>
    </div>
</template>
<script src="./apply.js"></script>
<style lang="less" scoped>
@import url("./index.less");
.el-input,
.el-select,
.el-date-editor {
    width: 430px;
}
.avatar-uploader {
    width: 224px;
    height: 154px;
    background-color: #fafafa;
    position: relative;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.avatar-uploader .el-upload:hover {
    border-color: #409eff;
}
.avatar-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 14px;
    color: #121314;
    i {
        margin-right: 8px;
    }
}
</style>
