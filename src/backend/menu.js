export const menu = async (tipo)=>{
    if(tipo==='desayuno'){

        return [
            {
                nombre:"Café Americano",
                precio : 5.00
            },
            {
                nombre:"Café con leche",
                precio : 7.00
            },
            {
                nombre:"Sandwich de jamón y queso",
                precio : 10.00
            },
            {
                nombre:"jugo de frutas natural",
                precio : 7.00
            },

        ]
    }else if(tipo==='almuerzo'){
        return [
            {
                nombre:"Hamburguesa simple",
                precio : 10.00
            },
            {
                nombre:"Hamburguesa doble",
                precio : 15.00
            },
            {
                nombre:"Papas fritas",
                precio : 5.00
            },
            {
                nombre:"Aros de cebolla",
                precio : 5.00
            },
            {
                nombre:"Agua 500ml",
                precio : 5.00
            },
            {
                nombre:"Agua 750ml",
                precio : 7.00
            },
            {
                nombre:"Gaseosa 500ml",
                precio : 7.00
            },
            {
                nombre:"Gaseosa 750ml",
                precio : 10.00
            },
            {
                nombre:"Queso",
                precio : 1.00
            },
            {
                nombre:"Huevo",
                precio : 1.00
            },
        ]
    }
}