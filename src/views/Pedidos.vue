<template>
    <div>
          <div class="izquierda">
              <div class="row">
                  <div class="col-4">
                       <h3 @click="abrir('desayunos')">
                        Desayunos
                        </h3>
                  </div>
                   <div class="col-4">
                        <h3  @click="abrir('almuerzos')">
                   Almuerzos
               </h3>
                   </div>
                
                <div class="col-4">
                     <h3 @click="abrir('listos')">
                   Listos
               </h3>
                </div>
               </div>
            <div   ref="desayunos" >
               
               <ul>
                   <li :key="i" v-for="(item,i) in desayuno">
                       <button @click="agregarItem(item)"> 
                           {{item.nombre}}
                       </button>
                   </li>
               </ul>
           </div>
           <div  class="none" ref="almuerzos">
               
               <ul>
                   <li :key="i" v-for="(item,i) in almuerzo">
                       <button @click="agregarItem(item)"> 
                           {{item.nombre}}
                       </button>
                   </li>
               </ul>
           </div>
            <div  class="none" ref="listos">
               
               <ul>
                   <!-- <li :key="i" v-for="(item,i) in listos">
                       <button @click="agregarItem(item)"> 
                           {{item.nombre}}
                       </button>
                   </li> -->
               </ul>
           </div>
          </div>
          <div class="derecha">
              <input v-model.lazy="nombre" type="text" placeholder="nombre">
              <input v-model="numero" type="number" placeholder="numeromesa">
              <div>
                  <h1>Detalle Pedido</h1>
                  <div>
                      <ul>
                          <li :key="i" v-for="(item , i ) in pedido">
                              <div style="display:flex">
                                  <h4>{{item.nombre}} - {{item.precio}}</h4>
                                  <button style="margin-left:10px" @click="duplicar(i)">
                                      +
                                  </button>
                                  <button style="margin-left:10px" @click="quitar(i)">
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
import * as api from '@/api'
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
            numero:'',
            pedidos: [],
            listos:[],
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
        duplicar:function(agregar){
            this.pedido = [...this.pedido, this.pedido[agregar]]
        },
        quitar:function(sacar){
            let temp = [...this.pedido ];
            for (let index = 0; index < temp.length; index++) {
               if (temp[index]===temp[sacar]) {
                   temp.splice(index,1)
               }
                
            }
            this.pedido = [...temp];
        },
        agregarItem:function(item){
            this.pedido = [...this.pedido,item];
        },
        enviarPedido: async function (){
            if(this.nombre && this.numero){
                let pedidoTotal = {
                nombre :this.nombre,
                numero : this.numero,
                pedido  : this.pedido
                }
                let respuesta = await this.addPedido(pedidoTotal)
                if(respuesta){
                    this.pedido = []
                    this.nombre = ''
                    this.numero = ''
                    //let respuesta = await enviarPedido(pedidoTotal);
                    //modal que me muestre lo que me respondio 
                    console.log(pedidoTotal,respuesta)
                }
            }else{
                alert("Necesitas ingresar un nombre y mesa")
            }
            
        },
        async addPedido (pedido) {      // <-- and here 
            const createdAt = new Date()
            let respuesta = await api.db.collection('pedidos').add({ ...pedido, createdAt:createdAt })
            return respuesta;
        },
        deletePedido(idPedido){
            api.db.collection('pedidos').doc(idPedido).delete()
        },
         abrir:function(ref){
             console.log(this.$refs['almuerzos']);
             this.$refs['desayunos'].classList.add('none');
             this.$refs['almuerzos'].classList.add('none');
             this.$refs['listos'].classList.add('none');
            let div = this.$refs[ref]
            console.log(div);
            div.classList.remove('none')
        },
    },
    
    watch:{
        pedido:function(){
            /* let total =  0;
            for (const item of this.pedido) {
                total = total + item.precio 
            }
            this.total = total */
        },
        pedidos:function(a){
            console.log(a);
        }
        
    },
    async created(){
        this.desayuno = await menu('desayuno');
        this.almuerzo = await menu('almuerzo');
        console.log(this.desayuno , this.almuerzo );
       /*  this.agregarItem() */
    },
    firestore() {
        return {
        pedidos: api.db.collection('pedidos')
        }
    },
    mounted(){
        
    }
}
</script>
<style lang="css" scoped>

.izquierda{
    color: rgb(255, 255, 255);
    text-decoration: none;
    background: rgb(0, 0, 0);
    
    width: 50%;
    /*border: 3px solid rgb(253, 253, 253);*/
    float: left;
   /* margin: 100px;*/
}
.derecha{
    color: rgb(255, 230, 1);
    text-decoration: none;
    background: rgb(0, 0, 0);
    
    width: 50%;
    border: 3px solid rgb(253, 253, 253);
    float: right;
    /*margin: 100px;*/
}

.clearfix{
    float: none;
    clear: both;
}

 li{
        list-style:none;
}

.none{
        display:none;
    }


</style>

