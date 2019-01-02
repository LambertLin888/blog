<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :span="24" class="footer">
        <div>
          COPYRIGHT © 2018 LINBENJIAN&nbsp;
          <a
            class="link"
            href="http://www.miibeian.gov.cn/"
            rel="nofollow"
            target="_blank"
          >粤ICP备18141397号</a>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="less">
@import url('../assets/css/common.less');
.footer {
  height: 60px;
  // background: @globalBgColor;
  color: #999;
  text-align: center;
  line-height: 60px;
  font-size: 14px;
}
.link {
  color: inherit;
}
</style>
