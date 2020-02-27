<template>
    <div>
        <h2 class="sub-header">添加装备</h2>
        <form>
            <div class="form-group">
                <label for="">装备名称</label>
                <input type="text" v-model="formData.name" class="form-control" placeholder="键入装备名称">
            </div>
            <div class="form-group">
                <label for="">装备价格</label>
                <input type="text" v-model="formData.price" class="form-control" placeholder="键入装备价格">
            </div>
            <button type="submit" class="btn btn-success" @click.prevent="handleAddEquip()">提交</button>
        </form>
    </div>
</template>

<script>
// import axios from 'axios' 已经main.js中导入，并添加到Vue实例的属性，用this.axios使用即可
export default {
    data(){
        return {
            formData:{
                name:this.equipName,
                price:this.equipPrice 
            }
        }
    },
    methods:{
        handleAddEquip(){
            this.axios.post('equip/',this.formData)
            .then(res => {
                window.alert('新增成功！');
                // 回到list组件：使用编程式导航
                this.$router.push({name:'equipList'});
            });
        }
    }
}
</script>

<style>

</style>