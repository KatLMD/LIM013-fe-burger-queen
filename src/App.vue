<template>
  <div id="app">
    <header>
      <div id="cabeza">Burguer Queen</div>
      <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/nueva">Nueva</router-link>
    </div>
    </header>
    <body>

      <form>

  <!--    <div>
      <input type="text" v-model="newWebsite.cliente" placeholder="Cliente">
      </div>
      <div>
        <input type="text" v-model="newWebsite.mesa" placeholder="mesa">
      </div>
      <div>
        <input type="text" v-model="newWebsite.pedido" placeholder="pedido">
      </div>
      <button type="submit">
        Save
      </button>-->




      </form>

      <router-view/>  
    </body>
    <footer>
      hecho 2021
    </footer>
    
  </div>
</template>

<script>
//import Firebase from 'firebase';
//import config from './config';
//let app = Firebase.initializeApp(config);
// mi coleccion es db aqui esta mi base de dato entera
//let db = app.database();
//let websitesRef = db.ref('websites');


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
