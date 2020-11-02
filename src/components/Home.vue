<template>
  <div class="home">
    <!--导航栏 组件-->
    <NavBar></NavBar>
    <!--轮播图-->
    <swiper></swiper>
    <!--卡片区-->
    <a-card class="home-card" :bordered="false">
      <!--每一个文章卡片区域-->
      <template v-for="item in articleList" :key="item.Id">
        <a-card class="item-card" hoverable :bordered="false" v-if="item.is_delete === 0">
          <!--左边区域 显示文章详情-->
          <div class="left">
            <h3>{{ item.title }}</h3>
            <a-tag>{{ sortHandle(item.cate_id) }}</a-tag>
            <p>发布文章时间: {{ item.pub_date }}</p>
          </div>
          <!--右边区域 显示图片-->
          <div class="right">
            <img :src="`http://www.muchjoyboy.com:3007${item.cover_img}`" alt="">
          </div>
        </a-card>
      </template>
    </a-card>
    <!--底部-->
    <div class="footer">
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue'

import NavBar from '@/components/NavBar'
import Swiper from '@/components/Swiper'

// 引入请求
import { getArticle, getSort } from '@/network/home'

export default {
  name: 'Home',
  components: {
    NavBar,
    Swiper
  },
  setup () {
    // reactive将对象转为响应式对象
    const pageInfo = reactive({
      pagenum: 1,
      pagesize: 10,
      cate_id: '',
      state: ''
    })
    const state = reactive({
      articleList: [],
      sortListData: []
    })
    // 获取文章列表
    const list = async () => {
      try {
        const { data } = await getArticle(pageInfo)
        state.articleList = data
      } catch (e) {
        console.log('获取数据失败')
      }
    }

    // 获取文章分类
    const sortList = async () => {
      try {
        const { data } = await getSort()
        console.log(data)
        state.sortListData = data
      } catch (e) {
        console.log('获取文章分类失败')
      }
    }
    // 处理分类
    const sortHandle = (id) => {
      const result = state.sortListData.find(item => item.Id === id)
      console.log(result['name'])
      return result
    }
    // 生命周期
    onMounted(() => {
      list()
      sortList()
    })
    return {
      ...toRefs(state),
      pageInfo,
      sortHandle
    }
  }
}
</script>

<style scoped lang="less">
.home-card {
  margin: 0 auto;
  width: 840px;
  box-sizing: border-box;
  .ant-card-body {
    padding: 0;
  }
  .item-card {
    width: 840px;
    height: 270px;
    border-radius: 8px;
    margin-bottom: 10px;
    padding: 10px;
    box-sizing: border-box;
    .left {
      width: 480px;
      height: 250px;
      padding: 25px 20px;
      h3 {
        font-size: 25px;
        font-weight: 700;
      }
      p {
        margin-top: 120px;
      }
    }
    .right {
      width: 340px;
      height: 250px;
      box-sizing: border-box;
      img {
        width: 100%;
        height: 100%;
        border-radius: 8px;
        object-fit:cover;
        transition: all 1s;
      }
    }
  }
  .item-card:hover {
    box-shadow:0 4px 8px 6px rgba(7,17,27,.1);
    z-index: 111;
    transition: all 1s;
    img {
      transform: scale(1.06);
    }
  }
}
.footer {
  height: 50px;
  background-color: #eeeeee;
  margin-top: 50px;
}
</style>
