import {firebase} from './firebase.js'
export const pedidos ={
    getPedidos: async ()=>{
        let pedido  = await firebase.getPedidos('pedido')
        return pedido;
    }
}