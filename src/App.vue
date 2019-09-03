<template>
  <div class="corpo">
    <meu-menu></meu-menu>
    <transition name="pagina">
    <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import menu from './components/shared/menu/menu.vue';
export default{
  components: {
    'meu-menu' : menu
  }
}
</script>
<style escoped>
.corpo{
  font-family: Helvetica, sans-serif;
  width: 96%;
  margin: 0 auto;
}
.link{
  margin-top: 10px;
}
a{
  text-decoration: none;
}
.pagina-enter, .pagina-leave-active{
  opacity: 0;
}
.pagina-enter-active, .pagina-leave-active{
  transition: opacity .5s;
}
</style>