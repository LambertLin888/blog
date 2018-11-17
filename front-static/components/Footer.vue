<template>
  <div>
    <el-row
      type="flex"
      justify="center">
      <el-col
        :span="24"
        class="footer">
        <div>COPYRIGHT © 2018 LINBENJIAN </div>
        <div>&nbsp;粤ICP备18003757号</div>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="less">
@import url('../assets/css/common.less');
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;
  height: 60px;
  background: @globalBgColor;
  color: #999;
  text-align: center;
  line-height: 60px;
  font-size: 14px;
}
</style>
