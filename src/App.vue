<script setup>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
</script>

<template>
  <Header/>
  <router-view></router-view>
  <Footer/>
</template>

<style>
*{
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

body{
  background: linear-gradient(#add5fa, #f9a59a, #95b8f6);
  
}
</style>