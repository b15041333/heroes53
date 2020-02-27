<template>
  <div id="app">

    <!-- 头部：对应组件appnav -->
    <app-nav></app-nav>

    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3 col-md-2 sidebar">
          <!-- 侧边栏appslider -->
          <app-slider></app-slider>
        </div>
        <div class="col-sm-9 main"><!-- class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main" -->
         <!-- App.vue的作用就是展示不同组件 -->
         <router-view></router-view>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// 问题：要在App.vue中使用appnav组件
import appNav from './components/common/appnav.vue';
import appSlider from './components/common/appslider.vue';
import heroesList from './components/heroes/heroesList.vue';

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components:{
    // 注册组件：为组件对象赋组件名
    'appNav':appNav,
    // 这里有一个知识点，驼峰组件名在使用时可以用短杠间隔的组件名
    'appSlider':appSlider,
    'heroesList':heroesList,
  },
}
</script>

<style>
</style>
