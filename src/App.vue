<template>
  <div id="app">
    <div class="row" style="text-align: center;" @click="regresar()">
                    <header class="col-12" >
                        <h1>BurguerQueen</h1>
                    </header>  
    </div>
    <body>




      <router-view/>  
    </body>
    <footer>
      hecho 2021
    </footer>
    
  </div>
</template>

<script>


export default {
    name: 'app',
   // firebase:{
     // websites: websitesRef
   // },
    data(){
      return{
        newWebsite: {
          cliente:'',
          mesa:'',
          pedido:''
        }
      }
    }
  
}
</script>




<style>


#cabeza {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
