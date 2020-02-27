<template>
    <div>
        <h2 class="sub-header">编辑武器</h2>
        <form>
            <div class="form-group">
                <label for="">武器名称</label>
                <input type="text" class="form-control" v-model="weaponName">
            </div>
            <div class="form-group">
                <label for="">武器价格</label>
                <input type="text" class="form-control" v-model="weaponPrice">
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
            weaponName:'',
            weaponPrice:''
        }
    },
    methods:{
        getWeaponById(){
            // 通过this.$route.params.id获取到上一组件点击时传过来的id值
            var id = this.$route.params.id;
            console.log(id);
            this.axios.get('weapons/'+id)
            .then(res => {
                this.weaponName = res.data.name;
                this.weaponPrice = res.data.price;
            });
        },
        handleEdit(){
            var id = this.$route.params.id;
            this.axios.put('weapons/'+id,{
                name:this.weaponName,
                price:this.weaponPrice
            }).then(()=>{
                window.alert('修改成功！');
                this.$router.push({name:'weaponsList'});
            })
        }
    },
    mounted(){
        this.getWeaponById();
    }
}
</script>

<style>

</style>