<template>
    <div>
        <h2 class="sub-header">添加英雄</h2>
        <form>
            <div class="form-group">
                <label for="">英雄名称</label>
                <input type="text" v-model="formData.name" class="form-control" placeholder="键入中文名称">
            </div>
            <div class="form-group">
                <label for="">角色定位</label>
                <input type="text" v-model="formData.position" class="form-control" placeholder="上单/中单/打野/ADC/辅助">
            </div>
            <button type="submit" class="btn btn-success" @click.prevent="handleAddHero()">提交</button>
        </form>
    </div>
</template>

<script>
// import axios from 'axios' 已经main.js中导入，并添加到Vue实例的属性，用this.axios使用即可
export default {
    data(){
        return {
            formData:{
                name:this.heroName,
                gender:this.heroPosition 
            }
        }
    },
    methods:{
        handleAddHero(){
            this.axios.post('heroes',this.formData)
            .then(res => {
                window.alert('新增成功！');
                // 回到list组件：使用编程式导航
                this.$router.push({name:'heroesList'});
            });
        }
    }
}
</script>

<style>

</style>