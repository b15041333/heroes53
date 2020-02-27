<template>
    <div>
        <h2 class="sub-header">编辑装备</h2>
        <form>
            <div class="form-group">
                <label for="">装备名称</label>
                <input type="text" class="form-control" v-model="equipName">
            </div>
            <div class="form-group">
                <label for="">装备价格</label>
                <input type="text" class="form-control" v-model="equipPrice">
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
           equipName:'',
            equipPrice:''
        }
    },
    methods:{
        getEquipById(){
            // 通过this.$route.params.id获取到上一组件点击时传过来的id值
            var id = this.$route.params.id;
            console.log(id);
            this.axios.get('equip/'+id)
            .then(res => {
                this.equipName = res.data.name;
                this.equipPrice = res.data.price;
            });
        },
        handleEdit(){
            var id = this.$route.params.id;
            this.axios.put('equip/'+id,{
                name:this.equipName,
                price:this.equipPrice
            }).then(()=>{
                window.alert('修改成功！');
                this.$router.push({name:'equipList'});
            })
        }
    },
    mounted(){
        this.getEquipById();
    }
}
</script>

<style>

</style>