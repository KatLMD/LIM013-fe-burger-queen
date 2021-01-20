<template>
    <div>
            aquí estan las ordenes para el cocinero
            <div>
                {{pedidos}}
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
    firestore() {
        return {
        pedidos: api.db.collection('pedidos')
        }
    },
}
</script>
<style lang="css" scoped>

</style>