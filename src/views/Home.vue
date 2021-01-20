<template>
  <div id="home" class="home">
    <h1>Estamos listos!</h1>
    <MainButton  class="cocina" nombre="Cocinerx" href="/ordenes"/>
    <MainButton  class="cocina" nombre="Meserx" href="/pedidos"/> 
    <img class="entrada" alt="Vue logo" src="../assets/phamburguer.png" >
  </div>




</template>

<script>
// @ is an alias to /src
import MainButton from '@/components/MainButton.vue';

export default {
  name: 'Home',
  components: {
    MainButton,
  },
};
</script>

<style scoped>
h1{
  color: aliceblue;
 
}

#home {
 width: 100%;
 height: 800px;
 background-color: black;

}

.entrada{
  width: 50%;
  float: right
}
 

 .cocina{
    width: 20%;
    height: 60px;
  
}
 

</style>
