<template>
  <div class="nav">
    <div class="nav-bar">
      <img src="@/assets/muchjoy.png" alt="">
      <div class="right-nav">
        <ul class="right-nav-li">
          <li>
            <i class="iconfont icon-Sun"></i>
          </li>
          <li>首页</li>
          <li>分类</li>
          <li>评论</li>
          <li>关于</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'NavBar',
  setup () {
    const name = ref('muchjoy')
    return {
      name
    }
  }
}
</script>

<style scoped lang="less">
.nav-bar {
  height: 160px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 170px;
  border-bottom: 1px solid #6666;
  box-shadow: 0 3px 8px rgba(0,0,0,.2);
  img {
    width: 150px;
  }
  .right-nav >ul {
    display: flex;
    justify-content: center;
    line-height: 100px;
    font-size: 20px;
    //font-weight: 700;
    li {
      padding: 0;
      margin: 0 10px;
      .iconfont {
        font-size: 30px;
      }
    }
  }
}
</style>
