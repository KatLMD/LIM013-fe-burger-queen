<template>
    <div>
        
        <a class="main-button" :href="href"> 
            {{nombre}}
        </a>
        <!-- <div> algo </div> -->
    </div>
</template>
<script>
export default {
    name:"MainButton",
    props:{
        href:String,
        nombre:String
    }
}
</script>
<style lang="css" scoped>
 .main-button{
    color: rgb(0, 0, 0);
    text-decoration: none;
    background: rgb(251, 255, 17);
    line-height: 80px;
    width: 50%;
    border: 3px solid rgb(253, 253, 253);
    float: left;
    margin: 100px;    
    
 }
</style>