<template>
  <div >
    <h1>This is an about page</h1>
    <div>{{dato}}</div>
    <button @click="cambiar()">click</button>
    <div id="example-1">
           <button v-on:click="counter += 1"> + </button>
           <p> Cantidad {{ counter }} </p>
    </div>
    <div id="example-1">
           <button v-on:click="counter -= 1"> - </button>
           <p> menoso {{ menos }} </p>
    </div>


    <Cabecera></Cabecera>
    <Lista></Lista>
    <div>{{listaPedidos[0]}}</div>
  </div>
</template>
<script>
import Cabecera from '../components/Cabecera.vue'
import Lista from '../components/Lista.vue'
import {pedidos} from '../backend/pedidos.js'
export default {
  name:"Nueva",
  data(){
    return {
      dato:'hola mundo ',
      año:2021,
      listaPedidos:[],
      counter: 0,
      menos: 0,
    }
  },
  components:{
    Cabecera,Lista
  },
  methods:{
    cambiar:function(){
      let algo ="uno"
      this.algo()
      this.dato = this.dato + ' x2'
    },
    algo:function(){
      console.log('algo')
    }
  },
  async created(){
    console.log('me crearon');
    console.log(await pedidos.getPedidos())
    this.listaPedidos = await pedidos.getPedidos()
  },
  mounted(){
    console.log('me montaron');
  }
}

</script>
<style scoped>

</style>

