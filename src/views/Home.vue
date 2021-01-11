<template>
  <div class="home">
    <MainButton nombre="Cocinerx" href="/ordenes"/>
    <MainButton nombre="Meserx" href="/pedidos"/>
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
