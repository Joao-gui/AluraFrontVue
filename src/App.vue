<template>
  <div class="corpo">
    <h1 class="centralizado">{{ titulo }}</h1>

    <!-- Comando para fazer um search -->
    <!-- v-on:input é o comando que ele vai pegar o que foi escrito no Search -->
    <input type="search" class="filtro" v-on:input="filtro = $event.target.value" placeholder="filtre por parte do titulo">
    <ul class="lista-fotos">
      <!-- Aparece error mas funciona -->
      <li class="lista-fotos-item" v-for="foto of fotos">
        
        <meu-painel :titulo="foto.titulo">
          <img class="imagem-responsiva" :src="foto.url" :alt="foto.titulo">
        </meu-painel>         

      </li>
    </ul>

  </div>
</template>

<script>
import Painel from './components/shared/painel/Painel.vue';
export default {

  components: {
    'meu-painel' : Painel
  },

  data() {

    return {

      titulo: 'Alurapic', 
      fotos: [],    
      filtro: ''  
    }
  },
  
  created() {
    //Pode omitir o let promise e o promise    
    let promise = this.$http.get('http://localhost:3000/v1/fotos');
    promise
    .then(res => res.json())
    .then(fotos => this.fotos = fotos, err => console.log(err));
  }
}

</script>

<style>
.corpo{
  font-family: Helvetica, sans-serif;
  width: 96%;
  margin: 0 auto;
}
.centralizado{
  text-align: center;
}
.lista-fotos{
  list-style: none;
}
.lista-fotos .lista-fotos-item{
  display: inline-block;
}
.imagem-responsiva{
  width: 100%
}
.filtro{
  display: block;
  width: 100%;
}
</style>

