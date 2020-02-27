<template>
    <div>
        <h2 class="sub-header">编辑英雄</h2>
        <form>
            <div class="form-group">
                <label for="">英雄名称</label>
                <input type="text" class="form-control" v-model="heroName">
            </div>
            <div class="form-group">
                <label for="">角色定位</label>
                <input type="text" class="form-control" v-model="heroPosition">
            </div>
            <button type="submit" class="btn btn-success" @click.prevent="handleEdit()">提交</button>
        </form>
    </div>
</template>

<script>
// import axios from 'axios' 已经main.js中导入，并添加到Vue实例的属性，用this.axios使用即可
export default {
    data(){
        return {
            heroName:'',
            heroPosition:''
        }
    },
    methods:{
        getHeroById(){
            // 通过this.$route.params.id获取到上一组件点击时传过来的id值
            var id = this.$route.params.id;
            console.log(id);//输出要查询的英雄id
            this.axios.get('heroes/'+id)
            .then(res => {
                this.heroName = res.data.name;
                this.heroPosition = res.data.position;
            });
        },
        handleEdit(){
            var id = this.$route.params.id;
            this.axios.put('heroes/'+id,{
                name:this.heroName,
                position:this.heroPosition
            }).then(()=>{
                window.alert('修改成功！');
                this.$router.push({name:'heroesList'});
            })
        }
    },
    mounted(){
        this.getHeroById();
    }
}
</script>

<style>

</style>