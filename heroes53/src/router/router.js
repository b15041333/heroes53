// 模块：配置路由

// 模块化的工程中路由的用法
// 1.导入Vue和VueRouter，并且使用VueRouter插件(固定方法)
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// 2.导入要渲染的组件
import heroesList from '../components/heroes/heroesList.vue';
import addHeroes from '../components/heroes/addHeroes.vue';
import editHeroes from '../components/heroes/editHeroes.vue';
import weaponsList from '../components/weapons/weaponsList.vue';
import addWeapons from '../components/weapons/addWeapons.vue';
import editWeapons from '../components/weapons/editWeapons.vue';
import equipList from '../components/equip/equipList.vue';
import addEquip from '../components/equip/addEquip.vue';
import editEquip from '../components/equip/editEquip.vue';


// 3.路由配置
var routes = [
    {
        name:'heroesList',
        path:'/heroes',
        component:heroesList
    },
    {
      name:'addHeroes',
      path:'/addHeroes',
      component:addHeroes
    },
    {
      name:'editHeroes',
      path:'/editHeroes/:id',
      //动态路由写法，接收heroesList组件中showEditVue传来的id值，无论id为多少，都路由到同一个组件
      component:editHeroes
    },
    {
      name:'weaponsList',
      path:'/weapons',
      component:weaponsList
    },
    {
      name:'addWeapons',
      path:'/addWeapons',
      component:addWeapons
    },
    {
      name:'editWeapons',
      path:'/editWeapons/:id',
      component:editWeapons
    },
    {
      name:'equipList',
      path:'/equip',
      component:equipList
    },
    {
      name:'addEquip',
      path:'/addEquip',
      component:addEquip
    },
    {
      name:'editEquip',
      path:'/editEquip/:id',
      component:editEquip
    },
    {
      path:'/',
      redirect:{
        path:'/heroes'
      }
    }
  ]
//  4.实例化路由
  var myrouter = new VueRouter({
    routes:routes
  })

// 5.导出模块
  export default myrouter