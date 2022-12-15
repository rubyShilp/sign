<template>
  <div class="home">
    <div class="home-header"></div>
    <div class="home-center">
      <div class="home-items">
        <div class="home-left">
          <div class="home-title">设置控件信息</div>
          <div class="control-list">
            <div
              v-for="info of [1, 2, 3, 4, 5, 6, 7]"
              :key="info"
              class="list-item"
            >
              <div v-fa-sign-drap :draggable="true" class="item">
                <i class="sign-icon-kongjian"></i>
              </div>
              签名
            </div>
          </div>
        </div>
        <div class="home-main">
          <!-- <div id="pops" class="pdf-page"></div> -->
          <!-- <controls></controls> -->
          <pdf-viewer>
            <!--正文章-->
            <template v-slot:container="data">
              <widget :dataList="data.imgInfoList">
                <template v-slot="scope">
                  <controls
                    v-for="(controls, $index) of controlsList"
                    :key="$index"
                    :data="controls"
                    :infoImgs="scope.list"
                  >
                  </controls>
                </template>
              </widget>
            </template>
            <!--骑缝章--->
            <!-- <template v-slot:place="data">
              <controls
                v-for="(controls, $index) of perforationList"
                :key="$index"
                :data="controls"
                :infoImgs="data.imgInfo"
              >
              </controls>
            </template> -->
          </pdf-viewer>
        </div>
        <div class="home-right"></div>
      </div>
    </div>
  </div>
</template>
<script src="./home.js"></script>
<style scoped>
@import url("./home.less");
</style>
