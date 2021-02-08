export const menu = async (tipo)=>{
    if(tipo==='desayuno'){

        return [
            {
                id:1,
                nombre:"Café Americano",
                precio : 5.00,
                cantidad:1
            },
            {
                id:2,
                nombre:"Café con leche",
                precio : 7.00,
                cantidad:1
            },
            {
                id:3,
                nombre:"Sandwich de jamón y queso",
                precio : 10.00,
                cantidad:1
            },
            {
                id:4,
                nombre:"jugo de frutas natural",
                precio : 7.00,
                cantidad:1
            },

        ]
    }else if(tipo==='almuerzo'){
        return [
            {
                id:5,
                nombre:"Hamburguesa simple",
                precio : 10.00,
                cantidad:1
            },
            {
                id:6,
                nombre:"Hamburguesa doble",
                precio : 15.00,
                cantidad:1
            },
            {
                id:7,
                nombre:"Papas fritas",
                precio : 5.00,
                cantidad:1
            },
            {
                id:8,
                nombre:"Aros de cebolla",
                precio : 5.00,
                cantidad:1
            },
            {
                id:9,
                nombre:"Agua 500ml",
                precio : 5.00,
                cantidad:1
            },
            {
                id:10,
                nombre:"Agua 750ml",
                precio : 7.00,
                cantidad:1
            },
            {
                id:11,
                nombre:"Gaseosa 500ml",
                precio : 7.00,
                cantidad:1
            },
            {
                id:12,
                nombre:"Gaseosa 750ml",
                precio : 10.00,
                cantidad:1
            },
            {
                id:13,
                nombre:"Queso",
                precio : 1.00,
                cantidad:1
            },
            {
                id:14,
                nombre:"Huevo",
                precio : 1.00,
                cantidad:1
            },
        ]
    }

}