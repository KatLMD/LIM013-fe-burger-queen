<template>
  <div id="home" class="home">
  <body>
    <div class="container">
           

            <div class="row">
                    <div class="col-12 col-md-8">
                                <div class="row " style="text-align: center;">
                                  <MainButton type="button" class="col-6 btn btn-outline-warning bl-button" style="text-align: center;" nombre="Cocinerx" href="/ordenes"/>
                                </div>

                                <div class="row " style="text-align: center;">
                                   <MainButton type="button" class="col-6 btn btn-outline-warning bl-button" style="text-align: center;"  nombre="Meserx" href="/pedidos"/>
                                </div>
                    </div>

                    <div class="col-12 col-md-4">
                            <img class="img-fluid"  src="../assets/phamburguer.png" alt="" >
                    </div>
            </div>
    </div>
</body>

  </div>
</template>

<script>
// @ is an alias to /src
import MainButton from '@/components/MainButton.vue';

export default {
  name: 'Home',
  components: {
    MainButton,
  },
};
</script>

<style scoped>

</style>
