export const firebase = {
    getPedidos:async ()=>{
        return [
            {
                mesa : 2,
                cliente : 'jose',
                platos : [
                    { descripcion:'hamburguesa doble de carne',
                    precio : 5.5 },
                    { descripcion:'gaseosa coca cola',
                    precio : 2.5} 
                ]
            },
            {
                mesa : 4,
                cliente : 'Lucho',
                platos : [
                    { descripcion:'hamburguesa doble pollo',
                    precio : 6.5 },
                    { descripcion:'gaseosa coca cola',
                    precio : 2.5} 
                ]
            }
        ]
    }
}