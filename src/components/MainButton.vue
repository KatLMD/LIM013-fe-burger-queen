<template>
    <div class="boton-elec">
        
        <a class="eleccion" :href="href"> 
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



.eleccion{  
    font-weight: 900 !important;
    color:rgb(255, 255, 255)!important;
    border-color: rgb(255, 251, 0);
    text-decoration: none;
   
}



.boton-elec{
    height: 85px;
    padding: 25px;
     margin: auto;
}
</style>