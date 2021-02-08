<template>
    <div class="container">

        <div class="row">

    
          <div class= "col-12 col-md-5  izquierda" >
              <div class="row">
                  <div class="col-6">
                       <h3 @click="abrir('desayunos')" class="elegir">
                        Desayunos
                        </h3>
                  </div>
                   <div class="col-6">
                        <h3  @click="abrir('almuerzos')"  class="elegir">
                   Almuerzos
               </h3>
                   </div>
                
              <!--   <div class="col-4">
                     <h3 @click="abrir('listos')"  class="elegir">
                   Listos
               </h3>
                </div> -->
               </div>
            <div ref="desayunos" >
               
               <ul>
                   <li :key="i" v-for="(item,i) in desayuno">
                       <button @click="agregarItem(item)"> 
                           {{item.nombre}} {{item.cantidad}}
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
          <div class="col-12 col-md-7  derecha">
              <input v-model.lazy="nombre" type="text" placeholder="nombre del cliente" class="llenado">
              <input v-model="numero" type="number" placeholder="# mesa" class="llenado-mesa">
              <div>
                  <h1>Detalle del Pedido</h1>
                  <div>
                      <ul>
                          <li :key="i" v-for="(plato , i ) in pedido">

                              <div class="row">
                                  <div class="col-2">
                                      <button style="margin-left:10px" @click="agregarItem(plato)">
                                        <img class="tachito" src="../assets/addicionar.png"  alt="" style="height:30px;width: auto;"> 
                                      </button>
                                  </div>
                                  <div class="col-4">
                                      <h4>{{plato.nombre}}</h4>
                                  </div>
                                  <div  class="col-2"> 
                                      <h4>x{{plato.cantidad}}</h4>
                                  </div>
                                  <div class="col-2">
                                      <h4>S/ {{plato.precio*plato.cantidad}}</h4>
                                  </div>
                                  <div class="col-2">
                                      <button style="margin-left:10px" @click="quitar(i)">   
                                      <img class="tachito" src="../assets/deleeete.png"  alt="" style="height:30px;width: auto;"> 
                                  </button>
                                  </div>
                              </div>
                          </li>
                          <li>
                              Total del pedido: S/. {{total}}
                          </li>
                      </ul>
                  </div>
              </div>
              <div>
                  <button @click="enviarPedido()"   class="enviapedido">
                      ENVIAR PEDIDO
                  </button>
              </div>
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
                total = total + item.precio*item.cantidad
            } 
            return total;
        }
    },
    methods:{
        /*duplicar:function(agregar){
            this.pedido = [...this.pedido, this.pedido[agregar]]
        }, */
        quitar:function(sacar){
            let temp = [...this.pedido ];
            for (let index = 0; index < temp.length; index++) {
               if (temp[index]===temp[sacar]) {
                   temp.splice(index,1)
               }
                
            }
            this.pedido = temp;
        },
        agregarItem:function(item){
             let itemDesayuno = this.desayuno.filter(obj=>obj.id==item.id)

            let buscado = this.pedido.findIndex(obj=>obj.id==item.id)
            if(buscado===-1){
                this.pedido = [...this.pedido,{...item}];
            }else{
                this.pedido[buscado].cantidad++
            }           
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

*{
      box-sizing: border-box;

}
.none{
    display:none
}

.izquierda{
    border: 2px solid #dee2e6;
   
  
}

.derecha{
    border: 2px solid #dee2e6;
}

li{
    padding: 5px;
}

.enviapedido{
    width: 180px;
    height: 45px;
    cursor: pointer;
    background: #ffa702;
    border: 2px solid #ffa702;
    border-radius: 10px;
    font-family: 'Segoe UI';
    font-weight: 900;
    font-size: 18px;
    color: #000000;
}


header>h1 {
    color: rgb(255, 251, 0);
    height: 50px;
}

.col-6{
    width: 180px;
    height: 50px;
    cursor: pointer;
    background: rgb(255, 251, 0);
    border: 2px solid rgb(255, 251, 0);
    border-radius: 5px;
    font-family: 'Segoe UI';
    font-weight:900;
    font-size: 18px;
    text-align: center;
    padding: 3px;
    margin: 10px;
}

h3{
    color: black;
    font-weight:900;
}


</style>

