<template>
    <div>
          <div class="izquierda">
               <div>
               <h1>
                   Desayunos
               </h1>
               <ul>
                   <li :key="i" v-for="(item,i) in desayuno">
                       <button @click="agregarItem(item)"> 
                           {{item.nombre}}
                       </button>
                   </li>
               </ul>
           </div>
           <div>
               <h1>
                   Almuerzos
               </h1>
               <ul>
                   <li>
                      {{ almuerzo}}
                   </li>
                  
               </ul>
           </div>
          </div>
          <div class="derecha">
              <input v-model="nombre" type="text" placeholder="nombre">
              <input v-model="numero" type="number" placeholder="numeromesa">
              <div>
                  <h1>Detalle Pedido</h1>
                  <div>
                      <ul>
                          <li :key="i" v-for="(item , i ) in pedido">
                              <div>
                                  <h4>{{item.nombre}} - {{item.precio}}</h4>
                                  <button @click="quitar(i)">
                                      -
                                  </button>
                              </div>
                          </li>
                          <li>
                              Total: (S/) {{total}}
                          </li>
                      </ul>
                  </div>
              </div>
              <div>
                  <button @click="enviarPedido()">
                      Enviar Pedido
                  </button>
              </div>
          </div>
    </div>
</template>
<script>
import {menu} from '../backend/menu'
import {enviarPedido} from '../backend/enviarPedido'
export default {
    name:"Pedidos",
    props:{
    },
    data(){
        return {
            desayuno :[],
            almuerzo:[],
            pedido:[],
            //total : 0,
            nombre:'',
            numero:''
        }
    },
    computed:{
        total:function (){
           let total =  0;
            for (const item of this.pedido) {
                total = total + item.precio 
            } 
            return total;
        }
    },
    methods:{
        agregarItem:function(item={nombre:"algo",precio:12}){
            this.pedido = [...this.pedido,item];
        },
        enviarPedido: async function (){
            let pedidoTotal = {
                nombre :this.nombre,
                numero : this.numero,
                pedido  : this.pedido
            }
            let respuesta = await enviarPedido(pedidoTotal);
            //modal que muestre lo que te respondio 
            console.log(pedidoTotal,respuesta)
        }
    },
    
    watch:{
        pedido:function(){
            /* let total =  0;
            for (const item of this.pedido) {
                total = total + item.precio 
            }
            this.total = total */
    }
        
    },
    async created(){
        this.desayuno = await menu('desayuno');
        this.almuerzo = await menu('almuerzo');
        console.log(this.desayuno , this.almuerzo );
       /*  this.agregarItem() */
    }
}
</script>
<style lang="css" scoped>

</style>

