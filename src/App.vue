<template>


<nav class="naving">

<router-link to="/" class="navigation">Home</router-link>|
<router-link to="/about" class="navigation">About</router-link>|
<router-link to="/sinup" class="navigation">sinup</router-link>
<hr />
</nav> 
<GameFooter/>
<GameHeader/>


<router-view></router-view>





</template>

<script>
import GameFooter from"./components/GameFooter.vue"
import GameHeader from"./components/GameHeader.vue"
export default{
  components:{
   GameFooter,
   GameHeader,
  
  },
}









</script>