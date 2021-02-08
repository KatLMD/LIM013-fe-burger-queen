<template>
    <div class="row">
           <!--  aquí estan las ordenes para el cocinero -->
        
        <div class="col-12 col-sm-6">
               <div>
               <h1>
                   Por preparar
               </h1>
               <ul>
                    <li :key="i" v-for="(item,i) in pedidos">
                        <button class="btn btn-primary" @click="abrir(item)">
                             {{item.numero}} - {{parseTime(item)}}                        
                        </button>
                        <div class="row">
                            <div class="col">
                                <div class="none" :ref="`conte-${item['.key']}`">
                                    <div class="card card-body">
                                        {{item.numero}} 
                                        <ul>
                                            <li :key="j" v-for="(elemento,j) in item.pedido">
                                                {{elemento.nombre}}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                   </li> 
               </ul>
           </div>
        </div>

        <div class="col-12 col-sm-6">
              <div>
                  <h1>Orden lista</h1>
                  <div>
                      <ul>
                         <!--  <li :key="i" v-for="(item , i ) in pedido">
                              <div>
                                  <h4>{{item.nombre}} - {{item.precio}}</h4>
                                  <button @click="quitar(i)">
                                      -
                                  </button>
                              </div>
                          </li>
                          <li>
                              Total: (S/) {{total}}
                          </li> -->
                      </ul>
                  </div>
                  
              </div>
              
          </div>

       
    </div>
</template>
<script>
import  * as api from '@/api'

export default {
    name:'Ordenes',
    data(){
        return{
            pedidos:[]
        }
    },
    computed:{
        
    },
    firestore() {
        return {
        pedidos: api.db.collection('pedidos').orderBy('createdAt','asc')
        }
    },
    watch:{
        pedidos:function(data){
            
           
        }
    },
    methods:{
        abrir:function(obj){
            console.log(obj);
            console.log(this.$refs[`conte-${obj['.key']}`]); // document.getElementById('ss') => id="ss" ; document.querySelector('#ss') => id="ss" 
            let div = this.$refs[`conte-${obj['.key']}`][0]
            if (div.classList.contains('none')) { //verifico si tiene la clase none
                div.classList.remove('none')
            } else {
                div.classList.add('none')
            }
            
        },
        parseTime:function (item){
            console.log(new Date(new Date().getTime() -item.createdAt.seconds*1000)
            );
            return (new Date(new Date().getTime() -item.createdAt.seconds*1000))//.toLocaleTimeString()//.slice(0,-3)
        }
    }
}
</script>
<style lang="css" scoped>
    .none{
        display:none;
    }
    .ordenes-pedido{
        background:#198754
    }


</style>