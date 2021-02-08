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
    <!--  <footer>
      2021/ By @katBall/LABORATORIA#13 
    </footer> -->
    
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
    },
    methods:{
      regresar:function(){
        this.$router.push('/')
      }
    }
  
}
</script>




<style>

*{
    margin: 0px;
    padding: 5px;
}

header>h1{
    color: rgb(255, 251, 0)!important;
    height: 110px;
}

h3, h1, li{
  color:white;
}
header>h1{
    font-family: 'Pacifico', cursive;
    font-size: xxx-large;
    cursor:pointer;
}


body{
    padding: 25px;
    background: rgb(0, 0, 0);
}


.row{
    padding: 20px;
}
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

 li{
        list-style:none;
}


/* footer{
    width: 100%;
    height: 30px;
    position: absolute;
    bottom: 0;
    color: rgb(255, 251, 0);
}
 */

</style>
