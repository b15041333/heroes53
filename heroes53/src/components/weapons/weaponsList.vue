<template>
    <div>
        <h2 class="sub-header">武器列表</h2>
        <a class="btn btn-success" @click="showAddVue()">新增</a>
        <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>名称</th>
                  <th>价格</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tr v-for="(v,i) in list" :key="i">
                <td>{{v.id}}</td>
                <td>{{v.name}}</td>
                <td>{{v.price}}</td>
                <td>
                  <a @click.prevent="showEditVue(v.id)" class="change-cursor">编辑</a>&nbsp;&nbsp;
                  <a class="change-cursor" @click.prevent="deleteHero(v.id,v.name)">删除</a>
                </td>
              </tr>
            </table>
        </div>
    </div>
</template>

<script>
// import axios from 'axios' 已经main.js中导入，并添加到Vue实例的属性，用this.axios使用即可
export default {
  // 组件中的data是带有返回值的一个方法
data(){
  return {
    list:[]
  }
},
mounted(){
  // 页面加载完之后调用getData()方法
  this.getData();
},
methods:{
  getData(){
    // 注意，如果写成https将会报错
    this.axios.get('weapons/')
    .then((res)=>{
      const {status,data} = res;
      if(status == 200){
        this.list = data;
      }
    })
  },
  showAddVue(){
    // 编程式导航：改变URL标识的方式不只是<router-link>，还可以使用自己的js代码
    this.$router.push({name:'addWeapons'});
  },
  showEditVue(currId){
    // 如何将此组件中的id在另外一个组件edit中使用？需要考虑两组件中共有的对象，可以给对象加属性
    // push方法中还可以传第二个参数params，其值对应的对象可以自己定义
    // 先找到name为edit的路由，再将id值跟在后面传过去
    this.$router.push({name:'editWeapons',params:{id:currId}});
  },
  deleteHero(id,name){
      if(confirm('确定删除'+name+'吗？')){
        this.axios.delete('weapons/'+id)
        .then((res) => {
          // 处理数据成功需要更新视图
          this.getData();
        });
      }
  }
}
}
</script>

<style>
.change-cursor{
  cursor:pointer;
}
</style>