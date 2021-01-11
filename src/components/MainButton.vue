<template>
    <div>
        <a class="main-button" :href="href"> 
            {{nombre}}
        </a>
        <!-- <div> algo extra</div> -->
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

 }
</style>