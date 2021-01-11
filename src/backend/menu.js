export const menu = async (tipo)=>{
    if(tipo==='desayuno'){

        return [
            {
                nombre:"Huevo Frito",
                precio : 1.5
            },
            {
                nombre:"cafe",
                precio : 1.0
            },
        ]
    }else if(tipo==='almuerzo'){
        return [
            {
                nombre:"Hamburguesa",
                precio : 3.5
            },
            {
                nombre:"Gaseosa",
                precio : 2.5
            },
        ]
    }
}