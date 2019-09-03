<template>
  <div class="corpo">
    <!--Hora tem que exibir um component hora outro -->
    <v-toolbar dark>
        <v-toolbar-title>Conta</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items>
          <router-link to="/">
            <v-btn class="link" text>Home</v-btn>
          </router-link>
          <router-link to="/cadastro">
            <v-btn class="link" text>Cadastro</v-btn>
          </router-link>
        </v-toolbar-items>        
      </v-toolbar>
    <transition name="pagina">
    <router-view></router-view>
    </transition>
  </div>
</template>

<script>

export default{

  data(){

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